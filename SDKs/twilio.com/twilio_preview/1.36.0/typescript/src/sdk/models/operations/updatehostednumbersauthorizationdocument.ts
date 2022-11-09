import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEHOSTEDNUMBERSAUTHORIZATIONDOCUMENT_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateHostedNumbersAuthorizationDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @Metadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @Metadata({ data: "form, name=ContactPhoneNumber;" })
  contactPhoneNumber?: string;

  @Metadata({ data: "form, name=ContactTitle;" })
  contactTitle?: string;

  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=HostedNumberOrderSids;" })
  hostedNumberOrderSids?: string[];

  @Metadata({ data: "form, name=Status;" })
  status?: shared.AuthorizationDocumentEnumStatusEnum;
}


export class UpdateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateHostedNumbersAuthorizationDocumentPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;

  @Metadata()
  security: UpdateHostedNumbersAuthorizationDocumentSecurity;
}


export class UpdateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
