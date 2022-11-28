import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class ListIpRecordQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListIpRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIpRecordListIpRecordResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListIpRecordListIpRecordResponse extends SpeakeasyBase {
    ipRecords?: shared.VoiceV1IpRecord[];
    meta?: ListIpRecordListIpRecordResponseMeta;
}
export declare class ListIpRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListIpRecordQueryParams;
    security: ListIpRecordSecurity;
}
export declare class ListIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    listIpRecordResponse?: ListIpRecordListIpRecordResponse;
    statusCode: number;
}
