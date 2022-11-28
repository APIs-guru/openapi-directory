import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountSipSipDomainVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountSipSipDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=byoc_trunk_sid" })
  byocTrunkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=domain_name" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_caller_sid" })
  emergencyCallerSid?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_calling_enabled" })
  emergencyCallingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=secure" })
  secure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_registration" })
  sipRegistration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountSipSipDomainVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_status_callback_method" })
  voiceStatusCallbackMethod?: ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_status_callback_url" })
  voiceStatusCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
