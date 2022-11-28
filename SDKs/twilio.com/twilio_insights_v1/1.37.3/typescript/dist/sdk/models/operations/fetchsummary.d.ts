import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchSummaryPathParams extends SpeakeasyBase {
    callSid: string;
}
export declare class FetchSummaryQueryParams extends SpeakeasyBase {
    processingState?: shared.SummaryEnumProcessingStateEnum;
}
export declare class FetchSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSummaryPathParams;
    queryParams: FetchSummaryQueryParams;
    security: FetchSummarySecurity;
}
export declare class FetchSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1CallSummary?: shared.InsightsV1CallSummary;
}
