import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCallFeedbackServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallFeedbackPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class FetchCallFeedbackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCallFeedbackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCallFeedbackPathParams;
    security: FetchCallFeedbackSecurity;
}
export declare class FetchCallFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
