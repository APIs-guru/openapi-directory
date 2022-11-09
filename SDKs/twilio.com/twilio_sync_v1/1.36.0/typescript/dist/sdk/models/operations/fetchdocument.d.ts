import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDOCUMENT_SERVERS: string[];
export declare class FetchDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDocumentPathParams;
    security: FetchDocumentSecurity;
}
export declare class FetchDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
