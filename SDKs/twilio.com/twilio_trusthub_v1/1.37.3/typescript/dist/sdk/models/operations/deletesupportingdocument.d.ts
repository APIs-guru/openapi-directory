import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteSupportingDocumentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSupportingDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSupportingDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSupportingDocumentPathParams;
    security: DeleteSupportingDocumentSecurity;
}
export declare class DeleteSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
