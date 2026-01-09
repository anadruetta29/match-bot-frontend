import type { ChatStatus } from "../../entity/chat-status";

export interface ChatRes {
    session_id: string;
    status: ChatStatus;

    question?: {
        id: string;
        text: string;
        topic: string;
        options: {
        id: number;
        label: string;
        }[];
    };

    result?: {
        total_score: number;
    };

    finished: boolean;
}
