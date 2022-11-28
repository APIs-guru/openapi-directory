import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateHostedNumbersAuthorizationDocumentServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid: string;

  @SpeakeasyMetadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "form, name=ContactPhoneNumber;" })
  contactPhoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=ContactTitle;" })
  contactTitle: string;

  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email: string;

  @SpeakeasyMetadata({ data: "form, name=HostedNumberOrderSids;" })
  hostedNumberOrderSids: string[];
}


export class CreateHostedNumbersAuthorizationDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateHostedNumbersAuthorizationDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;

  @SpeakeasyMetadata()
  security: CreateHostedNumbersAuthorizationDocumentSecurity;
}


export class CreateHostedNumbersAuthorizationDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewHostedNumbersAuthorizationDocument?: shared.PreviewHostedNumbersAuthorizationDocument;
}
