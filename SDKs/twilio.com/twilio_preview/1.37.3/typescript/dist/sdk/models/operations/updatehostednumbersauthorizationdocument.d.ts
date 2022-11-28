import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateHostedNumbersAuthorizationDocumentServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateHostedNumbersAuthorizationDocumentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    addressSid?: string;
    ccEmails?: string[];
    contactPhoneNumber?: string;
    contactTitle?: string;
    email?: string;
    hostedNumberOrderSids?: string[];
    status?: shared.AuthorizationDocumentEnumStatusEnum;
}
export declare class UpdateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateHostedNumbersAuthorizationDocumentPathParams;
    request?: UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;
    security: UpdateHostedNumbersAuthorizationDocumentSecurity;
}
export declare class UpdateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
