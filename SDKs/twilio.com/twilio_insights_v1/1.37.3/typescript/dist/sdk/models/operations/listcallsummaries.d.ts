import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCallSummariesServerList: readonly ["https://insights.twilio.com"];
export declare class ListCallSummariesQueryParams extends SpeakeasyBase {
    abnormalSession?: boolean;
    branded?: boolean;
    callState?: string;
    callType?: string;
    direction?: string;
    endTime?: string;
    from?: string;
    fromCarrier?: string;
    fromCountryCode?: string;
    hasTag?: boolean;
    pageSize?: number;
    processingState?: shared.CallSummariesEnumProcessingStateRequestEnum;
    sortBy?: shared.CallSummariesEnumSortByEnum;
    startTime?: string;
    subaccount?: string;
    to?: string;
    toCarrier?: string;
    toCountryCode?: string;
    verifiedCaller?: boolean;
}
export declare class ListCallSummariesSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCallSummariesListCallSummariesResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCallSummariesListCallSummariesResponse extends SpeakeasyBase {
    callSummaries?: shared.InsightsV1CallSummaries[];
    meta?: ListCallSummariesListCallSummariesResponseMeta;
}
export declare class ListCallSummariesRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCallSummariesQueryParams;
    security: ListCallSummariesSecurity;
}
export declare class ListCallSummariesResponse extends SpeakeasyBase {
    contentType: string;
    listCallSummariesResponse?: ListCallSummariesListCallSummariesResponse;
    statusCode: number;
}
