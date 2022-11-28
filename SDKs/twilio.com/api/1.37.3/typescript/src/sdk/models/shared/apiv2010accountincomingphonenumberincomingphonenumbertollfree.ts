import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncomingPhoneNumberTollFreeEnumAddressRequirementEnum } from "./incomingphonenumbertollfreeenumaddressrequirementenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum } from "./incomingphonenumbertollfreeenumemergencyaddressstatusenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum } from "./incomingphonenumbertollfreeenumemergencystatusenum";
import { IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum } from "./incomingphonenumbertollfreeenumvoicereceivemodeenum";



// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities
/** 
 * Indicate if a phone can receive calls or messages
**/
export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mms" })
  mms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: boolean;
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=address_requirements" })
  addressRequirements?: IncomingPhoneNumberTollFreeEnumAddressRequirementEnum;

  @SpeakeasyMetadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_address_sid" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_address_status" })
  emergencyAddressStatus?: IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=emergency_status" })
  emergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=identity_sid" })
  identitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_application_sid" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_receive_mode" })
  voiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
