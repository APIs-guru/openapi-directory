import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountSipSipDomainVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountSipSipDomain extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    authType?: string;
    byocTrunkSid?: string;
    dateCreated?: string;
    dateUpdated?: string;
    domainName?: string;
    emergencyCallerSid?: string;
    emergencyCallingEnabled?: boolean;
    friendlyName?: string;
    secure?: boolean;
    sid?: string;
    sipRegistration?: boolean;
    subresourceUris?: Map<string, any>;
    uri?: string;
    voiceFallbackMethod?: ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: ApiV2010AccountSipSipDomainVoiceMethodEnum;
    voiceStatusCallbackMethod?: ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum;
    voiceStatusCallbackUrl?: string;
    voiceUrl?: string;
}
