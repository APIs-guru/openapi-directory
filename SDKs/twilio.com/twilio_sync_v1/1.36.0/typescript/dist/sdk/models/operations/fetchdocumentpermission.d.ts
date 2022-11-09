import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDOCUMENTPERMISSION_SERVERS: string[];
export declare class FetchDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class FetchDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDocumentPermissionPathParams;
    security: FetchDocumentPermissionSecurity;
}
export declare class FetchDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceDocumentDocumentPermission?: shared.SyncV1ServiceDocumentDocumentPermission;
}
