import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECALLFEEDBACK_SERVERS: string[];
export declare class UpdateCallFeedbackPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class UpdateCallFeedbackUpdateCallFeedbackRequest extends SpeakeasyBase {
    issue?: shared.CallFeedbackEnumIssuesEnum[];
    qualityScore?: number;
}
export declare class UpdateCallFeedbackSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCallFeedbackRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCallFeedbackPathParams;
    request?: UpdateCallFeedbackUpdateCallFeedbackRequest;
    security: UpdateCallFeedbackSecurity;
}
export declare class UpdateCallFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
