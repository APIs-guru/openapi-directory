import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCDOCUMENTPERMISSION_SERVERS: string[];
export declare class DeleteSyncDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class DeleteSyncDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncDocumentPermissionPathParams;
    security: DeleteSyncDocumentPermissionSecurity;
}
export declare class DeleteSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
