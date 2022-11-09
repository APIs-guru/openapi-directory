import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEINCOMINGPHONENUMBERMOBILE_SERVERS = [
	"https://api.twilio.com",
];



export class CreateIncomingPhoneNumberMobilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @Metadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @Metadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @Metadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @Metadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @Metadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @Metadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @Metadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;

  @Metadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @Metadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;

  @Metadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @Metadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @Metadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @Metadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateIncomingPhoneNumberMobileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateIncomingPhoneNumberMobilePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;

  @Metadata()
  security: CreateIncomingPhoneNumberMobileSecurity;
}


export class CreateIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
}
