import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIncomingPhoneNumberMobileServerList = [
	"https://api.twilio.com",
] as const;


export class CreateIncomingPhoneNumberMobilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateIncomingPhoneNumberMobileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIncomingPhoneNumberMobilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;

  @SpeakeasyMetadata()
  security: CreateIncomingPhoneNumberMobileSecurity;
}


export class CreateIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
}
