import { SpeakeasyBase } from "../../../internal/utils";
import { SimEnumResetStatusEnum } from "./simenumresetstatusenum";
import { SimEnumStatusEnum } from "./simenumstatusenum";
export declare enum WirelessV1SimCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum WirelessV1SimSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum WirelessV1SimSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum WirelessV1SimVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum WirelessV1SimVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class WirelessV1Sim extends SpeakeasyBase {
    accountSid?: string;
    commandsCallbackMethod?: WirelessV1SimCommandsCallbackMethodEnum;
    commandsCallbackUrl?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    eId?: string;
    friendlyName?: string;
    iccid?: string;
    ipAddress?: string;
    links?: Map<string, any>;
    ratePlanSid?: string;
    resetStatus?: SimEnumResetStatusEnum;
    sid?: string;
    smsFallbackMethod?: WirelessV1SimSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: WirelessV1SimSmsMethodEnum;
    smsUrl?: string;
    status?: SimEnumStatusEnum;
    uniqueName?: string;
    url?: string;
    voiceFallbackMethod?: WirelessV1SimVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: WirelessV1SimVoiceMethodEnum;
    voiceUrl?: string;
}
