import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class UpdateIncomingPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
    accountSid?: string;
    addressSid?: string;
    apiVersion?: string;
    bundleSid?: string;
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberEnumEmergencyStatusEnum;
    friendlyName?: string;
    identitySid?: string;
    smsApplicationSid?: string;
    smsFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
    trunkSid?: string;
    voiceApplicationSid?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;
    voiceUrl?: string;
}
export declare class UpdateIncomingPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateIncomingPhoneNumberPathParams;
    request?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;
    security: UpdateIncomingPhoneNumberSecurity;
}
export declare class UpdateIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
