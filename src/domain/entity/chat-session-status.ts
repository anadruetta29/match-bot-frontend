import { Message } from "./message";

export class ChatSessionStatus {
    public sessionId: string;
    public messages: Message[];

    constructor(sessionId: string, messages: Message[]) {
        this.sessionId = sessionId;
        this.messages = messages;
    }

    public addMessage(message: Message): void {
        this.messages.push(message);
    }
}