import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PreviewWirelessSimSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum PreviewWirelessSimSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum PreviewWirelessSimVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum PreviewWirelessSimVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class PreviewWirelessSim extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=commands_callback_method" })
  commandsCallbackMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=commands_callback_url" })
  commandsCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=e_id" })
  eId?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=iccid" })
  iccid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rate_plan_sid" })
  ratePlanSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: PreviewWirelessSimSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_method" })
  smsMethod?: PreviewWirelessSimSmsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: PreviewWirelessSimVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_method" })
  voiceMethod?: PreviewWirelessSimVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
