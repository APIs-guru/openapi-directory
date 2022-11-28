import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordMonthlyServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordMonthlyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordMonthlyQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordMonthlyEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordMonthlySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordMonthlyListUsageRecordMonthlyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly[];
}
export declare class ListUsageRecordMonthlyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordMonthlyPathParams;
    queryParams: ListUsageRecordMonthlyQueryParams;
    security: ListUsageRecordMonthlySecurity;
}
export declare class ListUsageRecordMonthlyResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordMonthlyResponse?: ListUsageRecordMonthlyListUsageRecordMonthlyResponse;
    statusCode: number;
}
