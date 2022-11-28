import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateDocumentHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class UpdateDocumentUpdateDocumentRequest extends SpeakeasyBase {
    data?: any;
    ttl?: number;
}
export declare class UpdateDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDocumentPathParams;
    headers: UpdateDocumentHeaders;
    request?: UpdateDocumentUpdateDocumentRequest;
    security: UpdateDocumentSecurity;
}
export declare class UpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
