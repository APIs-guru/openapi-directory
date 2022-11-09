import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCLISTPERMISSION_SERVERS: string[];
export declare class DeleteSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class DeleteSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncListPermissionPathParams;
    security: DeleteSyncListPermissionSecurity;
}
export declare class DeleteSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
