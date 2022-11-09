import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESYNCDOCUMENT_SERVERS: string[];
export declare class DeleteSyncDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncDocumentPathParams;
    security: DeleteSyncDocumentSecurity;
}
export declare class DeleteSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
