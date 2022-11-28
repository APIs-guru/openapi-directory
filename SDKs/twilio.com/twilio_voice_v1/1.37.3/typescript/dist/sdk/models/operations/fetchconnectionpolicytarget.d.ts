import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class FetchConnectionPolicyTargetPathParams extends SpeakeasyBase {
    connectionPolicySid: string;
    sid: string;
}
export declare class FetchConnectionPolicyTargetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConnectionPolicyTargetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConnectionPolicyTargetPathParams;
    security: FetchConnectionPolicyTargetSecurity;
}
export declare class FetchConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
