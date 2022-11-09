import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECONNECTIONPOLICYTARGET_SERVERS: string[];
export declare class UpdateConnectionPolicyTargetPathParams extends SpeakeasyBase {
    connectionPolicySid: string;
    sid: string;
}
export declare class UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
    enabled?: boolean;
    friendlyName?: string;
    priority?: number;
    target?: string;
    weight?: number;
}
export declare class UpdateConnectionPolicyTargetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConnectionPolicyTargetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateConnectionPolicyTargetPathParams;
    request?: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;
    security: UpdateConnectionPolicyTargetSecurity;
}
export declare class UpdateConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
