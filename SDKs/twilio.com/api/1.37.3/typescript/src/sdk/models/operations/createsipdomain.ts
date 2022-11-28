import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipDomainServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateSipDomainCreateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateSipDomainCreateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ByocTrunkSid;" })
  byocTrunkSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DomainName;" })
  domainName: string;

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
  voiceFallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceFallbackUrl;" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceMethod;" })
  voiceMethod?: CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackMethod;" })
  voiceStatusCallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=VoiceStatusCallbackUrl;" })
  voiceStatusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceUrl;" })
  voiceUrl?: string;
}


export class CreateSipDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipDomainPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipDomainCreateSipDomainRequest;

  @SpeakeasyMetadata()
  security: CreateSipDomainSecurity;
}


export class CreateSipDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
