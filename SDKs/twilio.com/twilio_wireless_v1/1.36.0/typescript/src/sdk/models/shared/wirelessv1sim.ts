import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimEnumResetStatusEnum } from "./simenumresetstatusenum";
import { SimEnumStatusEnum } from "./simenumstatusenum";

export enum WirelessV1SimCommandsCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum WirelessV1SimSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum WirelessV1SimSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum WirelessV1SimVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum WirelessV1SimVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class WirelessV1Sim extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=commands_callback_method" })
  commandsCallbackMethod?: WirelessV1SimCommandsCallbackMethodEnum;

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

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=rate_plan_sid" })
  ratePlanSid?: string;

  @Metadata({ data: "json, name=reset_status" })
  resetStatus?: SimEnumResetStatusEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: WirelessV1SimSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: WirelessV1SimSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: SimEnumStatusEnum;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: WirelessV1SimVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: WirelessV1SimVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
