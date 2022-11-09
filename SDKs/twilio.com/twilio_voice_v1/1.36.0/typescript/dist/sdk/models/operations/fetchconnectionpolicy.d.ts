import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONNECTIONPOLICY_SERVERS: string[];
export declare class FetchConnectionPolicyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchConnectionPolicySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConnectionPolicyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConnectionPolicyPathParams;
    security: FetchConnectionPolicySecurity;
}
export declare class FetchConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
