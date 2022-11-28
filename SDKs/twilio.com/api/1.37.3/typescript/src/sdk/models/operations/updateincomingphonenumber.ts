import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateIncomingPhoneNumberServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateIncomingPhoneNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

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

  @SpeakeasyMetadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateIncomingPhoneNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateIncomingPhoneNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;

  @SpeakeasyMetadata()
  security: UpdateIncomingPhoneNumberSecurity;
}


export class UpdateIncomingPhoneNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
