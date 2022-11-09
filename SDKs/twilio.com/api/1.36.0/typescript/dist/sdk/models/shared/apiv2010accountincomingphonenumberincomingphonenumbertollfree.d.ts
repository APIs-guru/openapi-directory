import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IncomingPhoneNumberTollFreeEnumAddressRequirementEnum } from "./incomingphonenumbertollfreeenumaddressrequirementenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum } from "./incomingphonenumbertollfreeenumemergencyaddressstatusenum";
import { IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum } from "./incomingphonenumbertollfreeenumemergencystatusenum";
import { IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum } from "./incomingphonenumbertollfreeenumvoicereceivemodeenum";
/**
 * Indicate if a phone can receive calls or messages
**/
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: IncomingPhoneNumberTollFreeEnumAddressRequirementEnum;
    addressSid?: string;
    apiVersion?: string;
    beta?: boolean;
    bundleSid?: string;
    capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeCapabilities;
    dateCreated?: string;
    dateUpdated?: string;
    emergencyAddressSid?: string;
    emergencyAddressStatus?: IncomingPhoneNumberTollFreeEnumEmergencyAddressStatusEnum;
    emergencyStatus?: IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    origin?: string;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeStatusCallbackMethodEnum;
    trunkSid?: string;
    uri?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeVoiceMethodEnum;
    voiceReceiveMode?: IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
