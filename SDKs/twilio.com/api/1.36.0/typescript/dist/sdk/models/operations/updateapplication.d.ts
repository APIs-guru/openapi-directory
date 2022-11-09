import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEAPPLICATION_SERVERS: string[];
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateApplicationUpdateApplicationRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateApplicationUpdateApplicationRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateApplicationUpdateApplicationRequest extends SpeakeasyBase {
    apiVersion?: string;
    friendlyName?: string;
    messageStatusCallback?: string;
    smsFallbackMethod?: UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: UpdateApplicationUpdateApplicationRequestSmsMethodEnum;
    smsStatusCallback?: string;
    smsUrl?: string;
    statusCallback?: string;
    statusCallbackMethod?: UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;
    voiceCallerIdLookup?: boolean;
    voiceFallbackMethod?: UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class UpdateApplicationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateApplicationPathParams;
    request?: UpdateApplicationUpdateApplicationRequest;
    security: UpdateApplicationSecurity;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
