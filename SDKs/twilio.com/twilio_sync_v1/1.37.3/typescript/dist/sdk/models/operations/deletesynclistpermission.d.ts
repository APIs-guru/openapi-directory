import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
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
