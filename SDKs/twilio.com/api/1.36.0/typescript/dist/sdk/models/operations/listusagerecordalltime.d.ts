import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAGERECORDALLTIME_SERVERS: string[];
export declare class ListUsageRecordAllTimePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordAllTimeQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordAllTimeEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordAllTimeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordAllTimeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordAllTimePathParams;
    queryParams: ListUsageRecordAllTimeQueryParams;
    security: ListUsageRecordAllTimeSecurity;
}
export declare class ListUsageRecordAllTimeListUsageRecordAllTimeResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordAllTime[];
}
export declare class ListUsageRecordAllTimeResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordAllTimeResponse?: ListUsageRecordAllTimeListUsageRecordAllTimeResponse;
    statusCode: number;
}
