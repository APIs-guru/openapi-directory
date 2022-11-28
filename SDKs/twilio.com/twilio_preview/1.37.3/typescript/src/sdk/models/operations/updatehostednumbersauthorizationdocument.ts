import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateHostedNumbersAuthorizationDocumentServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateHostedNumbersAuthorizationDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "form, name=ContactPhoneNumber;" })
  contactPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=ContactTitle;" })
  contactTitle?: string;

  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=HostedNumberOrderSids;" })
  hostedNumberOrderSids?: string[];

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.AuthorizationDocumentEnumStatusEnum;
}


export class UpdateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateHostedNumbersAuthorizationDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;

  @SpeakeasyMetadata()
  security: UpdateHostedNumbersAuthorizationDocumentSecurity;
}


export class UpdateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
