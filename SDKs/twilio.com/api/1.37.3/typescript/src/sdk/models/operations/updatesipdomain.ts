import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSipDomainServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateSipDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ByocTrunkSid;" })
  byocTrunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DomainName;" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyCallerSid;" })
  emergencyCallerSid?: string;

  @SpeakeasyMetadata({ data: "form, name=EmergencyCallingEnabled;" })
  emergencyCallingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Secure;" })
  secure?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SipRegistration;" })
  sipRegistration?: boolean;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackMethod;" })
  voiceFallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackMethod;" })
  voiceStatusCallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackUrl;" })
  voiceStatusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class UpdateSipDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSipDomainPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipDomainUpdateSipDomainRequest;

  @SpeakeasyMetadata()
  security: UpdateSipDomainSecurity;
}


export class UpdateSipDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
