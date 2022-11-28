import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class ListIpAccessControlListPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class ListIpAccessControlListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIpAccessControlListListIpAccessControlListResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListIpAccessControlListListIpAccessControlListResponse extends SpeakeasyBase {
    ipAccessControlLists?: shared.TrunkingV1TrunkIpAccessControlList[];
    meta?: ListIpAccessControlListListIpAccessControlListResponseMeta;
}
export declare class ListIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIpAccessControlListPathParams;
    queryParams: ListIpAccessControlListQueryParams;
    security: ListIpAccessControlListSecurity;
}
export declare class ListIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    listIpAccessControlListResponse?: ListIpAccessControlListListIpAccessControlListResponse;
    statusCode: number;
}
