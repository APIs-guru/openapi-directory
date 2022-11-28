import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCallFeedbackSummaryServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallFeedbackSummaryPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchCallFeedbackSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCallFeedbackSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCallFeedbackSummaryPathParams;
    security: FetchCallFeedbackSummarySecurity;
}
export declare class FetchCallFeedbackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallFeedbackSummary?: shared.ApiV2010AccountCallCallFeedbackSummary;
}
