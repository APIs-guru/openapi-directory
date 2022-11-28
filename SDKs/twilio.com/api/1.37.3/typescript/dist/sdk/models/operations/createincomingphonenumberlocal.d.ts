import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateIncomingPhoneNumberLocalServerList: readonly ["https://api.twilio.com"];
export declare class CreateIncomingPhoneNumberLocalPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
    addressSid?: string;
    apiVersion?: string;
    bundleSid?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    phoneNumber: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum;
    trunkSid?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
export declare class CreateIncomingPhoneNumberLocalSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIncomingPhoneNumberLocalPathParams;
    request?: CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest;
    security: CreateIncomingPhoneNumberLocalSecurity;
}
export declare class CreateIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal;
}
