import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEINCOMINGPHONENUMBERMOBILE_SERVERS: string[];
export declare class CreateIncomingPhoneNumberMobilePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
    addressSid?: string;
    apiVersion?: string;
    bundleSid?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    phoneNumber: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;
    trunkSid?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
export declare class CreateIncomingPhoneNumberMobileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIncomingPhoneNumberMobilePathParams;
    request?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;
    security: CreateIncomingPhoneNumberMobileSecurity;
}
export declare class CreateIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
}
