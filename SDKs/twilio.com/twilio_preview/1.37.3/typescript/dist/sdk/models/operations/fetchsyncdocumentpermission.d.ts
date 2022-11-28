import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class FetchSyncDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncDocumentPermissionPathParams;
    security: FetchSyncDocumentPermissionSecurity;
}
export declare class FetchSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
