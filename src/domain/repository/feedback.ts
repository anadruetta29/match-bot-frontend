import type { FeedbackReq } from "../dto/feedback/FeedbackReq";
import type { FeedbackRes } from "../dto/feedback/FeedbackRes";

export abstract class FeedbackRepositoryI {
    abstract submitFeedback(dto: FeedbackReq): Promise<FeedbackRes>;
}
