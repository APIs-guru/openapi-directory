import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PhoneNumberEnumAddressRequirementEnum } from "./phonenumberenumaddressrequirementenum";

export enum TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum TrunkingV1TrunkPhoneNumberSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum TrunkingV1TrunkPhoneNumberVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class TrunkingV1TrunkPhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=address_requirements" })
  addressRequirements?: PhoneNumberEnumAddressRequirementEnum;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=beta" })
  beta?: boolean;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: Map<string, any>;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_application_sid" })
  smsApplicationSid?: string;

  @Metadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: TrunkingV1TrunkPhoneNumberSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @Metadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: TrunkingV1TrunkPhoneNumberVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
