import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSupportingDocumentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateSupportingDocumentCreateSupportingDocumentRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName: string;
    type: string;
}
export declare class CreateSupportingDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSupportingDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSupportingDocumentCreateSupportingDocumentRequest;
    security: CreateSupportingDocumentSecurity;
}
export declare class CreateSupportingDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1SupportingDocument?: shared.TrusthubV1SupportingDocument;
}
