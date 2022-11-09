import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCALLFEEDBACKSUMMARY_SERVERS: string[];
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
