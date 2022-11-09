import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAGERECORDDAILY_SERVERS: string[];
export declare class ListUsageRecordDailyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordDailyQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordDailyEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordDailySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordDailyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordDailyPathParams;
    queryParams: ListUsageRecordDailyQueryParams;
    security: ListUsageRecordDailySecurity;
}
export declare class ListUsageRecordDailyListUsageRecordDailyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordDaily[];
}
export declare class ListUsageRecordDailyResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordDailyResponse?: ListUsageRecordDailyListUsageRecordDailyResponse;
    statusCode: number;
}
