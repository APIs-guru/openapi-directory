import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncSyncMapPermissionPathParams;
    request?: UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;
    security: UpdateSyncSyncMapPermissionSecurity;
}
export declare class UpdateSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
