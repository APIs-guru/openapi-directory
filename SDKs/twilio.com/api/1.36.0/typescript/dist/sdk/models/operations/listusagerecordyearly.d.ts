import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAGERECORDYEARLY_SERVERS: string[];
export declare class ListUsageRecordYearlyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordYearlyQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordYearlyEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordYearlySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordYearlyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordYearlyPathParams;
    queryParams: ListUsageRecordYearlyQueryParams;
    security: ListUsageRecordYearlySecurity;
}
export declare class ListUsageRecordYearlyListUsageRecordYearlyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordYearly[];
}
export declare class ListUsageRecordYearlyResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordYearlyResponse?: ListUsageRecordYearlyListUsageRecordYearlyResponse;
    statusCode: number;
}
