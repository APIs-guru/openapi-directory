import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PreviewWirelessSimSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum PreviewWirelessSimSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum PreviewWirelessSimVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum PreviewWirelessSimVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class PreviewWirelessSim extends SpeakeasyBase {
    accountSid?: string;
    commandsCallbackMethod?: string;
    commandsCallbackUrl?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    eId?: string;
    friendlyName?: string;
    iccid?: string;
    links?: Map<string, any>;
    ratePlanSid?: string;
    sid?: string;
    smsFallbackMethod?: PreviewWirelessSimSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: PreviewWirelessSimSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    uniqueName?: string;
    url?: string;
    voiceFallbackMethod?: PreviewWirelessSimVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: PreviewWirelessSimVoiceMethodEnum;
    voiceUrl?: string;
}
