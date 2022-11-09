import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AddressSid;" })
  addressSid: string;

  @Metadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @Metadata({ data: "form, name=ContactPhoneNumber;" })
  contactPhoneNumber: string;

  @Metadata({ data: "form, name=ContactTitle;" })
  contactTitle: string;

  @Metadata({ data: "form, name=Email;" })
  email: string;

  @Metadata({ data: "form, name=HostedNumberOrderSids;" })
  hostedNumberOrderSids: string[];
}


export class CreateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;

  @Metadata()
  security: CreateHostedNumbersAuthorizationDocumentSecurity;
}


export class CreateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
