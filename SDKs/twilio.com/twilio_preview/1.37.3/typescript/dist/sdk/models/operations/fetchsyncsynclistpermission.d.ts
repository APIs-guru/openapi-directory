import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncSyncListPermissionServerList: readonly ["https://preview.twilio.com"];
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
