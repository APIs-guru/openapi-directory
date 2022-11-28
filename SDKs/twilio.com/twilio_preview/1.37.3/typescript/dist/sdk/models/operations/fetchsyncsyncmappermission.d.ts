import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncMapPermissionPathParams;
    security: FetchSyncSyncMapPermissionSecurity;
}
export declare class FetchSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
