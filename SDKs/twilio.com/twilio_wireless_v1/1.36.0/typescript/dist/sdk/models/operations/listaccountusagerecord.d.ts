import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTACCOUNTUSAGERECORD_SERVERS: string[];
export declare class ListAccountUsageRecordQueryParams extends SpeakeasyBase {
    end?: Date;
    granularity?: shared.AccountUsageRecordEnumGranularityEnum;
    pageSize?: number;
    start?: Date;
}
export declare class ListAccountUsageRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAccountUsageRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListAccountUsageRecordQueryParams;
    security: ListAccountUsageRecordSecurity;
}
export declare class ListAccountUsageRecordListAccountUsageRecordResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAccountUsageRecordListAccountUsageRecordResponse extends SpeakeasyBase {
    meta?: ListAccountUsageRecordListAccountUsageRecordResponseMeta;
    usageRecords?: shared.WirelessV1AccountUsageRecord[];
}
export declare class ListAccountUsageRecordResponse extends SpeakeasyBase {
    contentType: string;
    listAccountUsageRecordResponse?: ListAccountUsageRecordListAccountUsageRecordResponse;
    statusCode: number;
}
