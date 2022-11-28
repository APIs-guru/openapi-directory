import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateApplicationServerList: readonly ["https://api.twilio.com"];
export declare class CreateApplicationPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateApplicationCreateApplicationRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateApplicationCreateApplicationRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateApplicationCreateApplicationRequest extends SpeakeasyBase {
    apiVersion?: string;
    friendlyName?: string;
    messageStatusCallback?: string;
    smsFallbackMethod?: CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateApplicationCreateApplicationRequestSmsMethodEnum;
    smsStatusCallback?: string;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateApplicationCreateApplicationRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class CreateApplicationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateApplicationPathParams;
    request?: CreateApplicationCreateApplicationRequest;
    security: CreateApplicationSecurity;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
