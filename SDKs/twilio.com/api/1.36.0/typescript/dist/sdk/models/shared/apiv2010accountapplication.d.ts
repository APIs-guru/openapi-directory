import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ApiV2010AccountApplicationSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountApplicationSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountApplicationStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountApplicationVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountApplicationVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountApplication extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    dateCreated?: string;
    dateUpdated?: string;
    friendlyName?: string;
    messageStatusCallback?: string;
    sid?: string;
    smsFallbackMethod?: ApiV2010AccountApplicationSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: ApiV2010AccountApplicationSmsMethodEnum;
    smsStatusCallback?: string;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: ApiV2010AccountApplicationStatusCallbackMethodEnum;
    uri?: string;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: ApiV2010AccountApplicationVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountApplicationVoiceMethodEnum;
    voiceUrl?: string;
}
