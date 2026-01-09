import { ErrorHandler, type ChatDatasourceI, type ChatReq, type ChatRes } from "../../domain";
import { Message } from "../../domain";
import type { ChatService } from "../services/ChatService";

export class ChatDataSource implements ChatDatasourceI {
    private chatService: ChatService;

    constructor(chatService: ChatService) {
        this.chatService = chatService;
        this.chatService.connect(); 
    }

    public async sendMessage(dto: ChatReq): Promise<ChatRes> {
        return new Promise<ChatRes>((resolve) => {
            try {

                this.chatService.onMessageReceived((message: Message) => {
                    try {
                        const response: ChatRes = {
                            session_id: dto.session_id,
                            status: "started",
                            question: {
                                id: "", 
                                text: message.text,
                                topic: "",
                                options: []
                            },
                            finished: false
                        };
                        resolve(response);
                    } catch (error: unknown) {

                        ErrorHandler.handleError(error as Error);
                    }
                });

                this.chatService.onSessionClosed((result) => {
                    try {
                        const response: ChatRes = {
                            session_id: dto.session_id,
                            status: "finished",
                            question: undefined,
                            result: result ?? undefined,
                            finished: true
                        };
                        resolve(response);
                    } catch (err: unknown) {
                        ErrorHandler.handleError(err as Error);
                    }
                });

                this.chatService.sendAnswer(dto.answer?.option_id ?? -1);

            } catch (err: unknown) {
                ErrorHandler.handleError(err as Error);
            }
        });
    }
}
