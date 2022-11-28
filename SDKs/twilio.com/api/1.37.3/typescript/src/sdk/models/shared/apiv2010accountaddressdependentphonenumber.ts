import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DependentPhoneNumberEnumAddressRequirementEnum } from "./dependentphonenumberenumaddressrequirementenum";
import { DependentPhoneNumberEnumEmergencyStatusEnum } from "./dependentphonenumberenumemergencystatusenum";


export enum ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountAddressDependentPhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=address_requirements" })
  addressRequirements?: DependentPhoneNumberEnumAddressRequirementEnum;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_address_sid" })
  emergencyAddressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=emergency_status" })
  emergencyStatus?: DependentPhoneNumberEnumEmergencyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_application_sid" })
  smsApplicationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_method" })
  smsFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_fallback_url" })
  smsFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_method" })
  smsMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sms_url" })
  smsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_application_sid" })
  voiceApplicationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_caller_id_lookup" })
  voiceCallerIdLookup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_method" })
  voiceFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_fallback_url" })
  voiceFallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_method" })
  voiceMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=voice_url" })
  voiceUrl?: string;
}
