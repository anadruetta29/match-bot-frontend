import type { ChatRequest } from "../dto/chat/ChatRequest";
import type { ChatResponse } from "../dto/chat/ChatResponse";

export abstract class ChatDatasourceI {
    abstract sendMessage(dto: ChatRequest): Promise<ChatResponse>;
}
