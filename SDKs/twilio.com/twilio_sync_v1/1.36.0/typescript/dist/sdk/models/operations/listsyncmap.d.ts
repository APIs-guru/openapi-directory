import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCMAP_SERVERS: string[];
export declare class ListSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncMapQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncMapPathParams;
    queryParams: ListSyncMapQueryParams;
    security: ListSyncMapSecurity;
}
export declare class ListSyncMapListSyncMapResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncMapListSyncMapResponse extends SpeakeasyBase {
    maps?: shared.SyncV1ServiceSyncMap[];
    meta?: ListSyncMapListSyncMapResponseMeta;
}
export declare class ListSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    listSyncMapResponse?: ListSyncMapListSyncMapResponse;
    statusCode: number;
}
