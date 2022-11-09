import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEINCOMINGPHONENUMBER_SERVERS: string[];
export declare class CreateIncomingPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest extends SpeakeasyBase {
    addressSid?: string;
    apiVersion?: string;
    areaCode?: string;
    bundleSid?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    phoneNumber?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
    trunkSid?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
export declare class CreateIncomingPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateIncomingPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateIncomingPhoneNumberPathParams;
    request?: CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest;
    security: CreateIncomingPhoneNumberSecurity;
}
export declare class CreateIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
