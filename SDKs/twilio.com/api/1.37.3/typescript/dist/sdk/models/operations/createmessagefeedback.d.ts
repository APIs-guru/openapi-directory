import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateMessageFeedbackServerList: readonly ["https://api.twilio.com"];
export declare class CreateMessageFeedbackPathParams extends SpeakeasyBase {
    accountSid: string;
    messageSid: string;
}
export declare class CreateMessageFeedbackCreateMessageFeedbackRequest extends SpeakeasyBase {
    outcome?: shared.MessageFeedbackEnumOutcomeEnum;
}
export declare class CreateMessageFeedbackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMessageFeedbackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMessageFeedbackPathParams;
    request?: CreateMessageFeedbackCreateMessageFeedbackRequest;
    security: CreateMessageFeedbackSecurity;
}
export declare class CreateMessageFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountMessageMessageFeedback?: shared.ApiV2010AccountMessageMessageFeedback;
}
