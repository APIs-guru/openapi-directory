import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTUSAGERECORD_SERVERS: string[];
export declare class ListUsageRecordPathParams extends SpeakeasyBase {
    simSid: string;
}
export declare class ListUsageRecordQueryParams extends SpeakeasyBase {
    end?: Date;
    granularity?: shared.UsageRecordEnumGranularityEnum;
    pageSize?: number;
    start?: Date;
}
export declare class ListUsageRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageRecordPathParams;
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
    usageRecords?: shared.WirelessV1SimUsageRecord[];
}
export declare class ListUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    listUsageRecordResponse?: ListUsageRecordListUsageRecordResponse;
    statusCode: number;
}
