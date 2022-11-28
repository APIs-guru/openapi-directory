import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipDomainPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateSipDomainCreateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateSipDomainCreateSipDomainRequest extends SpeakeasyBase {
    byocTrunkSid?: string;
    domainName: string;
    emergencyCallerSid?: string;
    emergencyCallingEnabled?: boolean;
    friendlyName?: string;
    secure?: boolean;
    sipRegistration?: boolean;
    voiceFallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;
    voiceStatusCallbackMethod?: CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;
    voiceStatusCallbackUrl?: string;
    voiceUrl?: string;
}
export declare class CreateSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipDomainPathParams;
    request?: CreateSipDomainCreateSipDomainRequest;
    security: CreateSipDomainSecurity;
}
export declare class CreateSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
