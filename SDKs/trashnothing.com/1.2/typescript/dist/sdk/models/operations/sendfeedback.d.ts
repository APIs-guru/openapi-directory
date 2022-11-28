import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendFeedbackRequestBody extends SpeakeasyBase {
    message: string;
    meta?: string;
    subject: string;
}
export declare class SendFeedbackRequest extends SpeakeasyBase {
    request: SendFeedbackRequestBody;
}
export declare class SendFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
