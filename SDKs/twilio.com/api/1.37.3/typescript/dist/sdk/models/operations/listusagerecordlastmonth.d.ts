import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordLastMonthServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordLastMonthPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordLastMonthQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordLastMonthEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordLastMonthSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordLastMonthListUsageRecordLastMonthResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordLastMonth[];
}
export declare class ListUsageRecordLastMonthRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordLastMonthPathParams;
    queryParams: ListUsageRecordLastMonthQueryParams;
    security: ListUsageRecordLastMonthSecurity;
}
export declare class ListUsageRecordLastMonthResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordLastMonthResponse?: ListUsageRecordLastMonthListUsageRecordLastMonthResponse;
    statusCode: number;
}
