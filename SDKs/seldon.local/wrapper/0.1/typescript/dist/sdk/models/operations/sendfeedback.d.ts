import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendFeedbackRequestBody extends SpeakeasyBase {
    json?: shared.Feedback;
}
export declare class SendFeedbackRequest extends SpeakeasyBase {
    request: SendFeedbackRequestBody;
}
export declare class SendFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
