import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateHostedNumbersHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;

export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsCapability;" })
  smsCapability: boolean;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackUrl;" })
  statusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationDocumentSid;" })
  verificationDocumentSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationType;" })
  verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}


export class CreateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;

  @SpeakeasyMetadata()
  security: CreateHostedNumbersHostedNumberOrderSecurity;
}


export class CreateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
