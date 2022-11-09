import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIPDOMAIN_SERVERS = [
	"https://api.twilio.com",
];



export class CreateSipDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateSipDomainCreateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateSipDomainCreateSipDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ByocTrunkSid;" })
  byocTrunkSid?: string;

  @Metadata({ data: "form, name=DomainName;" })
  domainName: string;

  @Metadata({ data: "form, name=EmergencyCallerSid;" })
  emergencyCallerSid?: string;

  @Metadata({ data: "form, name=EmergencyCallingEnabled;" })
  emergencyCallingEnabled?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Secure;" })
  secure?: boolean;

  @Metadata({ data: "form, name=SipRegistration;" })
  sipRegistration?: boolean;

  @Metadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceStatusCallbackMethod;" })
  voiceStatusCallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceStatusCallbackUrl;" })
  voiceStatusCallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateSipDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipDomainRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSipDomainPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipDomainCreateSipDomainRequest;

  @Metadata()
  security: CreateSipDomainSecurity;
}


export class CreateSipDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
