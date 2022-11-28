import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateConnectionPolicyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateConnectionPolicyUpdateConnectionPolicyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateConnectionPolicySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConnectionPolicyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConnectionPolicyPathParams;
    request?: UpdateConnectionPolicyUpdateConnectionPolicyRequest;
    security: UpdateConnectionPolicySecurity;
}
export declare class UpdateConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
