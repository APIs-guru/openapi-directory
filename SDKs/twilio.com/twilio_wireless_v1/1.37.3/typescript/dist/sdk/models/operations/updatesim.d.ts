import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSimServerList: readonly ["https://wireless.twilio.com"];
export declare class UpdateSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSimUpdateSimRequestCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSimUpdateSimRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSimUpdateSimRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSimUpdateSimRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSimUpdateSimRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSimUpdateSimRequest extends SpeakeasyBase {
    accountSid?: string;
    callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;
    callbackUrl?: string;
    commandsCallbackMethod?: UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;
    commandsCallbackUrl?: string;
    friendlyName?: string;
    ratePlan?: string;
    resetStatus?: shared.SimEnumResetStatusEnum;
    smsFallbackMethod?: UpdateSimUpdateSimRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: UpdateSimUpdateSimRequestSmsMethodEnum;
    smsUrl?: string;
    status?: shared.SimEnumStatusEnum;
    uniqueName?: string;
    voiceFallbackMethod?: UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateSimUpdateSimRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class UpdateSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSimPathParams;
    request?: UpdateSimUpdateSimRequest;
    security: UpdateSimSecurity;
}
export declare class UpdateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1Sim?: shared.WirelessV1Sim;
}
