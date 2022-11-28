import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageRecordServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageRecordPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageRecordQueryParams extends SpeakeasyBase {
    category?: shared.UsageRecordEnumCategoryEnum;
    endDate?: Date;
    includeSubaccounts?: boolean;
    pageSize?: number;
    startDate?: Date;
}
export declare class ListUsageRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordListUsageRecordResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageRecords?: shared.ApiV2010AccountUsageUsageRecord[];
}
export declare class ListUsageRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordPathParams;
    queryParams: ListUsageRecordQueryParams;
    security: ListUsageRecordSecurity;
}
export declare class ListUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;
    statusCode: number;
}
