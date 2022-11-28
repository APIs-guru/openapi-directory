import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VoiceV1ByocTrunkStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum VoiceV1ByocTrunkVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum VoiceV1ByocTrunkVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class VoiceV1ByocTrunk extends SpeakeasyBase {
    accountSid?: string;
    cnamLookupEnabled?: boolean;
    connectionPolicySid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    fromDomainSid?: string;
    sid?: string;
    statusCallbackMethod?: VoiceV1ByocTrunkStatusCallbackMethodEnum;
    statusCallbackUrl?: string;
    url?: string;
    voiceFallbackMethod?: VoiceV1ByocTrunkVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: VoiceV1ByocTrunkVoiceMethodEnum;
    voiceUrl?: string;
}
