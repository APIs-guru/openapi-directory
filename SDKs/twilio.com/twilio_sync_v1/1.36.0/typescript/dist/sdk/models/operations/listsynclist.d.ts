import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCLIST_SERVERS: string[];
export declare class ListSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncListPathParams;
    queryParams: ListSyncListQueryParams;
    security: ListSyncListSecurity;
}
export declare class ListSyncListListSyncListResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncListListSyncListResponse extends SpeakeasyBase {
    lists?: shared.SyncV1ServiceSyncList[];
    meta?: ListSyncListListSyncListResponseMeta;
}
export declare class ListSyncListResponse extends SpeakeasyBase {
    contentType: string;
    listSyncListResponse?: ListSyncListListSyncListResponse;
    statusCode: number;
}
