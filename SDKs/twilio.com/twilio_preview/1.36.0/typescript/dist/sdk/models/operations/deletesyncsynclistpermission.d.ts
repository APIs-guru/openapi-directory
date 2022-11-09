import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCSYNCLISTPERMISSION_SERVERS: string[];
export declare class DeleteSyncSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncSyncListPermissionPathParams;
    security: DeleteSyncSyncListPermissionSecurity;
}
export declare class DeleteSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
