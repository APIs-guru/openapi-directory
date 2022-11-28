import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIncomingPhoneNumberLocalServerList = [
	"https://api.twilio.com",
] as const;


export class CreateIncomingPhoneNumberLocalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=PhoneNumber;" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateIncomingPhoneNumberLocalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIncomingPhoneNumberLocalPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest;

  @SpeakeasyMetadata()
  security: CreateIncomingPhoneNumberLocalSecurity;
}


export class CreateIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal;
}
