import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordTodayServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordTodayPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordTodayQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordTodayEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordTodaySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordTodayListUsageRecordTodayResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordToday[];
}
export declare class ListUsageRecordTodayRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordTodayPathParams;
    queryParams: ListUsageRecordTodayQueryParams;
    security: ListUsageRecordTodaySecurity;
}
export declare class ListUsageRecordTodayResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordTodayResponse?: ListUsageRecordTodayListUsageRecordTodayResponse;
    statusCode: number;
}
