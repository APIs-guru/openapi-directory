import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteDocumentPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteDocumentPathParams;
    security: DeleteDocumentSecurity;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
