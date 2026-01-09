import type { ChatRequest } from "../dto/chat/ChatReq";
import type { ChatResponse } from "../dto/chat/ChatRes";

export abstract class ChatDatasourceI {
    abstract sendMessage(dto: ChatRequest): Promise<ChatResponse>;
}
