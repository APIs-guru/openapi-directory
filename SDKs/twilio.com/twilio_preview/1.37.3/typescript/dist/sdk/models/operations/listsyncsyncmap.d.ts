import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncSyncMapServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncMapPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncSyncMapQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncSyncMapSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncMapListSyncSyncMapResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncMapListSyncSyncMapResponse extends SpeakeasyBase {
    maps?: shared.PreviewSyncServiceSyncMap[];
    meta?: ListSyncSyncMapListSyncSyncMapResponseMeta;
}
export declare class ListSyncSyncMapRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncMapPathParams;
    queryParams: ListSyncSyncMapQueryParams;
    security: ListSyncSyncMapSecurity;
}
export declare class ListSyncSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncMapResponse?: ListSyncSyncMapListSyncSyncMapResponse;
    statusCode: number;
}
