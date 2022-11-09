import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IncomingPhoneNumberTollFreeEnumAddressRequirementEnum } from "./incomingphonenumbertollfreeenumaddressrequirementenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum } from "./incomingphonenumbertollfreeenumemergencyaddressstatusenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum } from "./incomingphonenumbertollfreeenumemergencystatusenum";
import { IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum } from "./incomingphonenumbertollfreeenumvoicereceivemodeenum";


// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities
/** 
 * Indicate if a phone can receive calls or messages
**/
export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=fax" })
  fax?: boolean;

  @Metadata({ data: "json, name=mms" })
  mms?: boolean;

  @Metadata({ data: "json, name=sms" })
  sms?: boolean;

  @Metadata({ data: "json, name=voice" })
  voice?: boolean;
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=address_requirements" })
  addressRequirements?: IncomingPhoneNumberTollFreeEnumAddressRequirementEnum;

  @Metadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=beta" })
  beta?: boolean;

  @Metadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=emergency_address_sid" })
  emergencyAddressSid?: string;

  @Metadata({ data: "json, name=emergency_address_status" })
  emergencyAddressStatus?: IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum;

  @Metadata({ data: "json, name=emergency_status" })
  emergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=identity_sid" })
  identitySid?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms_application_sid" })
  smsApplicationSid?: string;

  @Metadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @Metadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_receive_mode" })
  voiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
