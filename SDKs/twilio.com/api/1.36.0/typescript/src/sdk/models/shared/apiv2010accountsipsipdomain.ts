import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountSipSipDomainVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountSipSipDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=auth_type" })
  authType?: string;

  @Metadata({ data: "json, name=byoc_trunk_sid" })
  byocTrunkSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=domain_name" })
  domainName?: string;

  @Metadata({ data: "json, name=emergency_caller_sid" })
  emergencyCallerSid?: string;

  @Metadata({ data: "json, name=emergency_calling_enabled" })
  emergencyCallingEnabled?: boolean;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=secure" })
  secure?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sip_registration" })
  sipRegistration?: boolean;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountSipSipDomainVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_status_callback_method" })
  voiceStatusCallbackMethod?: ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=voice_status_callback_url" })
  voiceStatusCallbackUrl?: string;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
