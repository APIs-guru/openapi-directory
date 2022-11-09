import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDOCUMENT_SERVERS: string[];
export declare class CreateDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateDocumentCreateDocumentRequest extends SpeakeasyBase {
    data?: any;
    ttl?: number;
    uniqueName?: string;
}
export declare class CreateDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateDocumentPathParams;
    request?: CreateDocumentCreateDocumentRequest;
    security: CreateDocumentSecurity;
}
export declare class CreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
