import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitUserFeedbackPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SubmitUserFeedbackRequestBody extends SpeakeasyBase {
    category?: string;
    content?: string;
    positive: number;
}
export declare class SubmitUserFeedback200ApplicationJson extends SpeakeasyBase {
    feedback?: shared.Feedback;
    user?: shared.User;
}
export declare class SubmitUserFeedbackRequest extends SpeakeasyBase {
    pathParams: SubmitUserFeedbackPathParams;
    request: SubmitUserFeedbackRequestBody;
}
export declare class SubmitUserFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    submitUserFeedback200ApplicationJsonObject?: SubmitUserFeedback200ApplicationJson;
}
