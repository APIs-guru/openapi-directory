import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCMAPPERMISSION_SERVERS: string[];
export declare class DeleteSyncMapPermissionPathParams extends SpeakeasyBase {
    identity: string;
    mapSid: string;
    serviceSid: string;
}
export declare class DeleteSyncMapPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncMapPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncMapPermissionPathParams;
    security: DeleteSyncMapPermissionSecurity;
}
export declare class DeleteSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
