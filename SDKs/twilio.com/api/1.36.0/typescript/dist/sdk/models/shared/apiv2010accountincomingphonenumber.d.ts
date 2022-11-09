import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IncomingPhoneNumberEnumAddressRequirementEnum } from "./incomingphonenumberenumaddressrequirementenum";
import { IncomingPhoneNumberEnumEmergencyAddressStatusEnum } from "./incomingphonenumberenumemergencyaddressstatusenum";
import { IncomingPhoneNumberEnumEmergencyStatusEnum } from "./incomingphonenumberenumemergencystatusenum";
import { IncomingPhoneNumberEnumVoiceReceiveModeEnum } from "./incomingphonenumberenumvoicereceivemodeenum";
/**
 * Indicate if a phone can receive calls or messages
**/
export declare class ApiV2010AccountIncomingPhoneNumberCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare enum ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountIncomingPhoneNumber extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: IncomingPhoneNumberEnumAddressRequirementEnum;
    addressSid?: string;
    apiVersion?: string;
    beta?: boolean;
    bundleSid?: string;
    capabilities?: ApiV2010AccountIncomingPhoneNumberCapabilities;
    dateCreated?: string;
    dateUpdated?: string;
    emergencyAddressSid?: string;
    emergencyAddressStatus?: IncomingPhoneNumberEnumEmergencyAddressStatusEnum;
    emergencyStatus?: IncomingPhoneNumberEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    origin?: string;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountIncomingPhoneNumberSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberStatusCallbackMethodEnum;
    trunkSid?: string;
    uri?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountIncomingPhoneNumberVoiceMethodEnum;
    voiceReceiveMode?: IncomingPhoneNumberEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
