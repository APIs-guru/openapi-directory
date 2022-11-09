import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIPDOMAIN_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateSipDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ByocTrunkSid;" })
  byocTrunkSid?: string;

  @Metadata({ data: "form, name=DomainName;" })
  domainName?: string;

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
  voiceFallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;

  @Metadata({ data: "form, name=VoiceStatusCallbackMethod;" })
  voiceStatusCallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;

  @Metadata({ data: "form, name=VoiceStatusCallbackUrl;" })
  voiceStatusCallbackUrl?: string;

  @Metadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateSipDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipDomainRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSipDomainPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipDomainUpdateSipDomainRequest;

  @Metadata()
  security: UpdateSipDomainSecurity;
}


export class UpdateSipDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
