export interface ChatReq {
    session_id: string;
    answer?: {
        question_id: string;
        option_id: number;
    };
}
