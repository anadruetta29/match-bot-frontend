import { HTTPClient } from "../../core/adapters/http-client";
import { ErrorHandler, type FeedbackDatasourceI, type FeedbackReq, type FeedbackRes } from "../../domain";

export class FeedbackDatasource implements FeedbackDatasourceI {

    private http: HTTPClient;

    constructor() {
        this.http = new HTTPClient();
    }

    public async submitFeedback(dto: FeedbackReq): Promise<FeedbackRes> {
        try {
            const response = await this.http.post(
                `/sessions/${dto.session_id}/feedback`,
                { is_useful: dto.is_useful }
            );

            return { ...response, message: "Gracias por tu feedback!" };
        }
        catch (error) {
            throw ErrorHandler.handleError(error as Error);
        }
    }
}