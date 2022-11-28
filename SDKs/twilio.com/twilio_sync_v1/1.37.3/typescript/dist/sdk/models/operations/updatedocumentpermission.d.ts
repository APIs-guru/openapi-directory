import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class UpdateDocumentPermissionUpdateDocumentPermissionRequest extends SpeakeasyBase {
    manage: boolean;
    read: boolean;
    write: boolean;
}
export declare class UpdateDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDocumentPermissionPathParams;
    request?: UpdateDocumentPermissionUpdateDocumentPermissionRequest;
    security: UpdateDocumentPermissionSecurity;
}
export declare class UpdateDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceDocumentDocumentPermission?: shared.SyncV1ServiceDocumentDocumentPermission;
}
