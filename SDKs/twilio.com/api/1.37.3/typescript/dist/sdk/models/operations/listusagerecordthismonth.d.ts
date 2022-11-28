import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordThisMonthServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordThisMonthPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordThisMonthQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordThisMonthEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordThisMonthSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordThisMonthListUsageRecordThisMonthResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordThisMonth[];
}
export declare class ListUsageRecordThisMonthRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordThisMonthPathParams;
    queryParams: ListUsageRecordThisMonthQueryParams;
    security: ListUsageRecordThisMonthSecurity;
}
export declare class ListUsageRecordThisMonthResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordThisMonthResponse?: ListUsageRecordThisMonthListUsageRecordThisMonthResponse;
    statusCode: number;
}
