import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCMAPPERMISSION_SERVERS: string[];
export declare class FetchSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class FetchSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncMapPermissionPathParams;
    security: FetchSyncMapPermissionSecurity;
}
export declare class FetchSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
