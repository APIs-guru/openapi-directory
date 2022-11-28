import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncMapPermissionPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class ListSyncMapPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncMapPermissionListSyncMapPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncMapPermissionListSyncMapPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncMapPermissionListSyncMapPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceSyncMapSyncMapPermission[];
}
export declare class ListSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncMapPermissionPathParams;
    queryParams: ListSyncMapPermissionQueryParams;
    security: ListSyncMapPermissionSecurity;
}
export declare class ListSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listSyncMapPermissionResponse?: ListSyncMapPermissionListSyncMapPermissionResponse;
    statusCode: number;
}
