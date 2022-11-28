import { SpeakeasyBase } from "../../../internal/utils";
import { IncomingPhoneNumberMobileEnumAddressRequirementEnum } from "./incomingphonenumbermobileenumaddressrequirementenum";
import { IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum } from "./incomingphonenumbermobileenumemergencyaddressstatusenum";
import { IncomingPhoneNumberMobileEnumEmergencyStatusEnum } from "./incomingphonenumbermobileenumemergencystatusenum";
import { IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum } from "./incomingphonenumbermobileenumvoicereceivemodeenum";
/**
 * Indicate if a phone can receive calls or messages
**/
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: IncomingPhoneNumberMobileEnumAddressRequirementEnum;
    addressSid?: string;
    apiVersion?: string;
    beta?: boolean;
    bundleSid?: string;
    capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities;
    dateCreated?: string;
    dateUpdated?: string;
    emergencyAddressSid?: string;
    emergencyAddressStatus?: IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum;
    emergencyStatus?: IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    origin?: string;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum;
    trunkSid?: string;
    uri?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum;
    voiceReceiveMode?: IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
