import { SpeakeasyBase } from "../../../internal/utils";
import { DependentPhoneNumberEnumAddressRequirementEnum } from "./dependentphonenumberenumaddressrequirementenum";
import { DependentPhoneNumberEnumEmergencyStatusEnum } from "./dependentphonenumberenumemergencystatusenum";
export declare enum ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountAddressDependentPhoneNumber extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: DependentPhoneNumberEnumAddressRequirementEnum;
    apiVersion?: string;
    capabilities?: any;
    dateCreated?: string;
    dateUpdated?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: DependentPhoneNumberEnumEmergencyStatusEnum;
    friendlyName?: string;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum;
    trunkSid?: string;
    uri?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum;
    voiceUrl?: string;
}
