import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIncomingPhoneNumberTollFreeServerList = [
	"https://api.twilio.com",
] as const;


export class CreateIncomingPhoneNumberTollFreePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateIncomingPhoneNumberTollFreeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIncomingPhoneNumberTollFreePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest;

  @SpeakeasyMetadata()
  security: CreateIncomingPhoneNumberTollFreeSecurity;
}


export class CreateIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree;
}
