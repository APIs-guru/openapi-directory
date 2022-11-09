import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIPIPACCESSCONTROLLIST_SERVERS: string[];
export declare class ListSipIpAccessControlListPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListSipIpAccessControlListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipIpAccessControlListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipIpAccessControlListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipIpAccessControlListPathParams;
    queryParams: ListSipIpAccessControlListQueryParams;
    security: ListSipIpAccessControlListSecurity;
}
export declare class ListSipIpAccessControlListListSipIpAccessControlListResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAccessControlLists?: shared.ApiV2010AccountSipSipIpAccessControlList[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    listSipIpAccessControlListResponse?: ListSipIpAccessControlListListSipIpAccessControlListResponse;
    statusCode: number;
}
