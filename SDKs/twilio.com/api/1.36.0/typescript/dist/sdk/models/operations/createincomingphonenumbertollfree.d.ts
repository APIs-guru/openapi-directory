import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEINCOMINGPHONENUMBERTOLLFREE_SERVERS: string[];
export declare class CreateIncomingPhoneNumberTollFreePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
    addressSid?: string;
    apiVersion?: string;
    bundleSid?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    phoneNumber: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum;
    trunkSid?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
export declare class CreateIncomingPhoneNumberTollFreeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIncomingPhoneNumberTollFreePathParams;
    request?: CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest;
    security: CreateIncomingPhoneNumberTollFreeSecurity;
}
export declare class CreateIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree;
}
