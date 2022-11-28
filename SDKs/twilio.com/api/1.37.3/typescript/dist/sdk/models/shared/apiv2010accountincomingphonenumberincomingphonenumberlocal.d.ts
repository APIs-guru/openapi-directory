import { SpeakeasyBase } from "../../../internal/utils";
import { IncomingPhoneNumberLocalEnumAddressRequirementEnum } from "./incomingphonenumberlocalenumaddressrequirementenum";
import { IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum } from "./incomingphonenumberlocalenumemergencyaddressstatusenum";
import { IncomingPhoneNumberLocalEnumEmergencyStatusEnum } from "./incomingphonenumberlocalenumemergencystatusenum";
import { IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum } from "./incomingphonenumberlocalenumvoicereceivemodeenum";
/**
 * Indicate if a phone can receive calls or messages
**/
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal extends SpeakeasyBase {
    accountSid?: string;
    addressRequirements?: IncomingPhoneNumberLocalEnumAddressRequirementEnum;
    addressSid?: string;
    apiVersion?: string;
    beta?: boolean;
    bundleSid?: string;
    capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalCapabilities;
    dateCreated?: string;
    dateUpdated?: string;
    emergencyAddressSid?: string;
    emergencyAddressStatus?: IncomingPhoneNumberLocalEnumEmergencyAddressStatusEnum;
    emergencyStatus?: IncomingPhoneNumberLocalEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    origin?: string;
    phoneNumber?: string;
    sid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalStatusCallbackMethodEnum;
    trunkSid?: string;
    uri?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalVoiceMethodEnum;
    voiceReceiveMode?: IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
