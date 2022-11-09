import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCSYNCLISTPERMISSION_SERVERS: string[];
export declare class FetchSyncSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncSyncListPermissionPathParams;
    security: FetchSyncSyncListPermissionSecurity;
}
export declare class FetchSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
