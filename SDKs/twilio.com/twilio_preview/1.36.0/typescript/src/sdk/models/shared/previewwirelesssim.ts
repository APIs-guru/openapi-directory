import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PreviewWirelessSimSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum PreviewWirelessSimSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum PreviewWirelessSimVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum PreviewWirelessSimVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class PreviewWirelessSim extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=commands_callback_method" })
  commandsCallbackMethod?: string;

  @Metadata({ data: "json, name=commands_callback_url" })
  commandsCallbackUrl?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=e_id" })
  eId?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=iccid" })
  iccid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=rate_plan_sid" })
  ratePlanSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: PreviewWirelessSimSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: PreviewWirelessSimSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: PreviewWirelessSimVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: PreviewWirelessSimVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
