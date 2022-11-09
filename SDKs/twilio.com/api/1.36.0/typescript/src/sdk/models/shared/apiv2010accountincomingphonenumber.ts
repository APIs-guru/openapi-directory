import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IncomingPhoneNumberEnumAddressRequirementEnum } from "./incomingphonenumberenumaddressrequirementenum";
import { IncomingPhoneNumberEnumEmergencyAddressStatusEnum } from "./incomingphonenumberenumemergencyaddressstatusenum";
import { IncomingPhoneNumberEnumEmergencyStatusEnum } from "./incomingphonenumberenumemergencystatusenum";
import { IncomingPhoneNumberEnumVoiceReceiveModeEnum } from "./incomingphonenumberenumvoicereceivemodeenum";


// ApiV2010AccountIncomingPhoneNumberCapabilities
/** 
 * Indicate if a phone can receive calls or messages
**/
export class ApiV2010AccountIncomingPhoneNumberCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=fax" })
  fax?: boolean;

  @Metadata({ data: "json, name=mms" })
  mms?: boolean;

  @Metadata({ data: "json, name=sms" })
  sms?: boolean;

  @Metadata({ data: "json, name=voice" })
  voice?: boolean;
}

export enum ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberSmsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountIncomingPhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=address_requirements" })
  addressRequirements?: IncomingPhoneNumberEnumAddressRequirementEnum;

  @Metadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=beta" })
  beta?: boolean;

  @Metadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountIncomingPhoneNumberCapabilities;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=emergency_address_sid" })
  emergencyAddressSid?: string;

  @Metadata({ data: "json, name=emergency_address_status" })
  emergencyAddressStatus?: IncomingPhoneNumberEnumEmergencyAddressStatusEnum;

  @Metadata({ data: "json, name=emergency_status" })
  emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatusEnum;

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
  smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum;

  @Metadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @Metadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountIncomingPhoneNumberSmsMethodEnum;

  @Metadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @Metadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @Metadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum;

  @Metadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @Metadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum;

  @Metadata({ data: "json, name=voice_receive_mode" })
  voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveModeEnum;

  @Metadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
