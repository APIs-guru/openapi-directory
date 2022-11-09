import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];


export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @Metadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @Metadata({ data: "form, name=CcEmails;" })
  ccEmails?: string[];

  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @Metadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @Metadata({ data: "form, name=SmsCapability;" })
  smsCapability: boolean;

  @Metadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;

  @Metadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @Metadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;

  @Metadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=StatusCallbackUrl;" })
  statusCallbackUrl?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=VerificationDocumentSid;" })
  verificationDocumentSid?: string;

  @Metadata({ data: "form, name=VerificationType;" })
  verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}


export class CreateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;

  @Metadata()
  security: CreateHostedNumbersHostedNumberOrderSecurity;
}


export class CreateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
