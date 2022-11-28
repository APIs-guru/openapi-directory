import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIncomingPhoneNumberServerList = [
	"https://api.twilio.com",
] as const;


export class CreateIncomingPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=AreaCode;" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateIncomingPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIncomingPhoneNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest;

  @SpeakeasyMetadata()
  security: CreateIncomingPhoneNumberSecurity;
}


export class CreateIncomingPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
