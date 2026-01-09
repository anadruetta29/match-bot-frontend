
export class Message {
    role: "user" | "bot";
    text: string;

    constructor(role: "user" | "bot", text: string) {
        this.role = role;
        this.text = text;
    }

    public static fromObject(object: any): Message | null {
        if (!object) return null;

        return new Message(
            object.role,
            object.text,
        );
    }
}