import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncMapPermissionPathParams;
    security: DeleteSyncSyncMapPermissionSecurity;
}
export declare class DeleteSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
