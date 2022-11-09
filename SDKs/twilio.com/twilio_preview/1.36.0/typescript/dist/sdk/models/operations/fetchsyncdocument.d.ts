import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSYNCDOCUMENT_SERVERS: string[];
export declare class FetchSyncDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchSyncDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSyncDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSyncDocumentPathParams;
    security: FetchSyncDocumentSecurity;
}
export declare class FetchSyncDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewSyncServiceDocument?: shared.PreviewSyncServiceDocument;
}
