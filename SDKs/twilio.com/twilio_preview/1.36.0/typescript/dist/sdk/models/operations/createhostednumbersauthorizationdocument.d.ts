import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS: string[];
export declare class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    addressSid: string;
    ccEmails?: string[];
    contactPhoneNumber: string;
    contactTitle: string;
    email: string;
    hostedNumberOrderSids: string[];
}
export declare class CreateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
    security: CreateHostedNumbersAuthorizationDocumentSecurity;
}
export declare class CreateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
