import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateByocTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare enum UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateByocTrunkUpdateByocTrunkRequest extends SpeakeasyBase {
    cnamLookupEnabled?: boolean;
    connectionPolicySid?: string;
    friendlyName?: string;
    fromDomainSid?: string;
    statusCallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;
    statusCallbackUrl?: string;
    voiceFallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class UpdateByocTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateByocTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateByocTrunkPathParams;
    request?: UpdateByocTrunkUpdateByocTrunkRequest;
    security: UpdateByocTrunkSecurity;
}
export declare class UpdateByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
