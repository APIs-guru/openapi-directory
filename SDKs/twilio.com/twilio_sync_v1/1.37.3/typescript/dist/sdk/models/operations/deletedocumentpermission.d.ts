import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteDocumentPermissionPathParams extends SpeakeasyBase {
    documentSid: string;
    identity: string;
    serviceSid: string;
}
export declare class DeleteDocumentPermissionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDocumentPermissionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDocumentPermissionPathParams;
    security: DeleteDocumentPermissionSecurity;
}
export declare class DeleteDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
