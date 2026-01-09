import type { ChatStatus } from "./chat-status";
import { Score } from "./score";

export class Session {

    public id: string;
    public status: ChatStatus;
    public score?: Score;
    public user_feedback?: boolean;

    constructor(
        id: string,
        status: ChatStatus,
        score?: Score,
        user_feedback?: boolean
    ) {
        this.id = id;
        this.status = status;
        this.score = score;
        this.user_feedback = user_feedback;
    }

    public static fromObject(object: any): Session | null {
        if (!object) return null;

        return new Session(
            object.id,
            object.status as ChatStatus,
            Score.fromObject(object.score),
            object.user_feedback
        );
    }
}