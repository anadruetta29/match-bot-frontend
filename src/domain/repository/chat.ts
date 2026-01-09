import type { ChatReq } from "../dto/chat/ChatReq";
import type { ChatRes } from "../dto/chat/ChatRes";

export abstract class ChatRepositoryI {
    abstract sendMessage(dto: ChatReq): Promise<ChatRes>;
}
