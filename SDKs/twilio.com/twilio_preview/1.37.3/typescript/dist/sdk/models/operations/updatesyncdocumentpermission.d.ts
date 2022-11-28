import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateSyncDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSyncDocumentPermissionPathParams;
    request?: UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;
    security: UpdateSyncDocumentPermissionSecurity;
}
export declare class UpdateSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
