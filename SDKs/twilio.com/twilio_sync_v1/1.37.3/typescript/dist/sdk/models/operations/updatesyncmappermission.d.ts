import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncMapPermissionPathParams;
    request?: UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;
    security: UpdateSyncMapPermissionSecurity;
}
export declare class UpdateSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
