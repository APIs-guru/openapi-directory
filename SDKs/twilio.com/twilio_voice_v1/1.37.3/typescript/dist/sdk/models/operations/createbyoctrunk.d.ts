import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare enum CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateByocTrunkCreateByocTrunkRequest extends SpeakeasyBase {
    cnamLookupEnabled?: boolean;
    connectionPolicySid?: string;
    friendlyName?: string;
    fromDomainSid?: string;
    statusCallbackMethod?: CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
    statusCallbackUrl?: string;
    voiceFallbackMethod?: CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class CreateByocTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateByocTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateByocTrunkCreateByocTrunkRequest;
    security: CreateByocTrunkSecurity;
}
export declare class CreateByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
