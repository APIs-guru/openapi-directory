import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAGERECORD_SERVERS: string[];
export declare class ListUsageRecordQueryParams extends SpeakeasyBase {
    endTime?: Date;
    fleet?: string;
    granularity?: shared.UsageRecordEnumGranularityEnum;
    group?: shared.UsageRecordEnumGroupEnum;
    isoCountry?: string;
    network?: string;
    pageSize?: number;
    sim?: string;
    startTime?: Date;
}
export declare class ListUsageRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListUsageRecordQueryParams;
    security: ListUsageRecordSecurity;
}
export declare class ListUsageRecordListUsageRecordResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListUsageRecordListUsageRecordResponse extends SpeakeasyBase {
    meta?: ListUsageRecordListUsageRecordResponseMeta;
    usageRecords?: shared.SupersimV1UsageRecord[];
}
export declare class ListUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;
    statusCode: number;
}
