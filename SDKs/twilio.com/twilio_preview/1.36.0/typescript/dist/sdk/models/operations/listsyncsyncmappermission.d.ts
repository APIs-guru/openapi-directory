import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSYNCSYNCMAPPERMISSION_SERVERS: string[];
export declare class ListSyncSyncMapPermissionPathParams extends SpeakeasyBase {
    mapSid: string;
    serviceSid: string;
}
export declare class ListSyncSyncMapPermissionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncSyncMapPermissionPathParams;
    queryParams: ListSyncSyncMapPermissionQueryParams;
    security: ListSyncSyncMapPermissionSecurity;
}
export declare class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceSyncMapSyncMapPermission[];
}
export declare class ListSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    listSyncSyncMapPermissionResponse?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;
    statusCode: number;
}
