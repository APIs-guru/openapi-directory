import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncListPermissionPathParams extends SpeakeasyBase {
    identity: string;
    listSid: string;
    serviceSid: string;
}
export declare class FetchSyncListPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncListPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncListPermissionPathParams;
    security: FetchSyncListPermissionSecurity;
}
export declare class FetchSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceSyncListSyncListPermission?: shared.SyncV1ServiceSyncListSyncListPermission;
}
