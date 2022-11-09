import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEINCOMINGPHONENUMBER_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateIncomingPhoneNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @Metadata({ data: "form, name=AddressSid;" })
  addressSid?: string;

  @Metadata({ data: "form, name=ApiVersion;" })
  apiVersion?: string;

  @Metadata({ data: "form, name=BundleSid;" })
  bundleSid?: string;

  @Metadata({ data: "form, name=EmergencyAddressSid;" })
  emergencyAddressSid?: string;

  @Metadata({ data: "form, name=EmergencyStatus;" })
  emergencyStatus?: shared.IncomingPhoneNumberEnumEmergencyStatusEnum;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=IdentitySid;" })
  identitySid?: string;

  @Metadata({ data: "form, name=SmsApplicationSid;" })
  smsApplicationSid?: string;

  @Metadata({ data: "form, name=SmsFallbackMethod;" })
  smsFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;

  @Metadata({ data: "form, name=SmsFallbackUrl;" })
  smsFallbackUrl?: string;

  @Metadata({ data: "form, name=SmsMethod;" })
  smsMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;

  @Metadata({ data: "form, name=SmsUrl;" })
  smsUrl?: string;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=TrunkSid;" })
  trunkSid?: string;

  @Metadata({ data: "form, name=VoiceApplicationSid;" })
  voiceApplicationSid?: string;

  @Metadata({ data: "form, name=VoiceCallerIdLookup;" })
  voiceCallerIdLookup?: boolean;

  @Metadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceReceiveMode;" })
  voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateIncomingPhoneNumberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateIncomingPhoneNumberPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;

  @Metadata()
  security: UpdateIncomingPhoneNumberSecurity;
}


export class UpdateIncomingPhoneNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
