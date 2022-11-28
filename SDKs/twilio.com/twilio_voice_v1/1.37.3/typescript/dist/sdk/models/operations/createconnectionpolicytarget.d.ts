import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class CreateConnectionPolicyTargetPathParams extends SpeakeasyBase {
    connectionPolicySid: string;
}
export declare class CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest extends SpeakeasyBase {
    enabled?: boolean;
    friendlyName?: string;
    priority?: number;
    target: string;
    weight?: number;
}
export declare class CreateConnectionPolicyTargetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConnectionPolicyTargetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateConnectionPolicyTargetPathParams;
    request?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
    security: CreateConnectionPolicyTargetSecurity;
}
export declare class CreateConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
