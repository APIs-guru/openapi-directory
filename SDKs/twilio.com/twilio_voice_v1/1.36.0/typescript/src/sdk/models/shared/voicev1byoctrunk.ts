import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VoiceV1ByocTrunkStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum VoiceV1ByocTrunkVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum VoiceV1ByocTrunkVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class VoiceV1ByocTrunk extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=cnam_lookup_enabled" })
  cnamLookupEnabled?: boolean;

  @Metadata({ data: "json, name=connection_policy_sid" })
  connectionPolicySid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=from_domain_sid" })
  fromDomainSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VoiceV1ByocTrunkStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=status_callback_url" })
  statusCallbackUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: VoiceV1ByocTrunkVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: VoiceV1ByocTrunkVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
