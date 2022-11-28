import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class UpdateSyncListPermissionUpdateSyncListPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncListPermissionPathParams;
    request?: UpdateSyncListPermissionUpdateSyncListPermissionRequest;
    security: UpdateSyncListPermissionSecurity;
}
export declare class UpdateSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncListSyncListPermission?: shared.SyncV1ServiceSyncListSyncListPermission;
}
