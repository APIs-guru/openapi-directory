import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PhoneNumberEnumAddressRequirementEnum } from "./phonenumberenumaddressrequirementenum";
export declare enum TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum TrunkingV1TrunkPhoneNumberSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum TrunkingV1TrunkPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class TrunkingV1TrunkPhoneNumber extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: PhoneNumberEnumAddressRequirementEnum;
    apiVersion?: string;
    beta?: boolean;
    capabilities?: Map<string, any>;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: TrunkingV1TrunkPhoneNumberSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum;
    trunkSid?: string;
    url?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: TrunkingV1TrunkPhoneNumberVoiceMethodEnum;
    voiceUrl?: string;
}
