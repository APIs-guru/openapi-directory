import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipDomainPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
    byocTrunkSid?: string;
    domainName?: string;
    emergencyCallerSid?: string;
    emergencyCallingEnabled?: boolean;
    friendlyName?: string;
    secure?: boolean;
    sipRegistration?: boolean;
    voiceFallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;
    voiceStatusCallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;
    voiceStatusCallbackUrl?: string;
    voiceUrl?: string;
}
export declare class UpdateSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSipDomainPathParams;
    request?: UpdateSipDomainUpdateSipDomainRequest;
    security: UpdateSipDomainSecurity;
}
export declare class UpdateSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
