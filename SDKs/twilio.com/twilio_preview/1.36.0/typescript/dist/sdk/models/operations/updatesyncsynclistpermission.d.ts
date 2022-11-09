import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESYNCSYNCLISTPERMISSION_SERVERS: string[];
export declare class UpdateSyncSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateSyncSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncSyncListPermissionPathParams;
    request?: UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;
    security: UpdateSyncSyncListPermissionSecurity;
}
export declare class UpdateSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
