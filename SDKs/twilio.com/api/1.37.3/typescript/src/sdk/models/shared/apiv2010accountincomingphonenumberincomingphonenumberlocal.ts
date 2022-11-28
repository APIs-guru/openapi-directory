import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IncomingPhoneNumberLocalEnumAddressRequirementEnum } from "./incomingphonenumberlocalenumaddressrequirementenum";
import { IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum } from "./incomingphonenumberlocalenumemergencyaddressstatusenum";
import { IncomingPhoneNumberLocalEnumEmergencyStatusEnum } from "./incomingphonenumberlocalenumemergencystatusenum";
import { IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum } from "./incomingphonenumberlocalenumvoicereceivemodeenum";



// ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities
/** 
 * Indicate if a phone can receive calls or messages
**/
export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mms" })
  mms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: boolean;
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=address_requirements" })
  addressRequirements?: IncomingPhoneNumberLocalEnumAddressRequirementEnum;

  @SpeakeasyMetadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=beta" })
  beta?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bundle_sid" })
  bundleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_address_sid" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_address_status" })
  emergencyAddressStatus?: IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=emergency_status" })
  emergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatusEnum;

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
  smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_receive_mode" })
  voiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
