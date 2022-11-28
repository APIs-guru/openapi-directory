import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordYesterdayServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordYesterdayPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordYesterdayQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordYesterdayEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordYesterdaySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordYesterdayListUsageRecordYesterdayResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday[];
}
export declare class ListUsageRecordYesterdayRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordYesterdayPathParams;
    queryParams: ListUsageRecordYesterdayQueryParams;
    security: ListUsageRecordYesterdaySecurity;
}
export declare class ListUsageRecordYesterdayResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordYesterdayResponse?: ListUsageRecordYesterdayListUsageRecordYesterdayResponse;
    statusCode: number;
}
