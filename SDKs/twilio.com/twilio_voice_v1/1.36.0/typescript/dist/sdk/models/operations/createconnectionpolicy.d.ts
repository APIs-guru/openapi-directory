import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECONNECTIONPOLICY_SERVERS: string[];
export declare class CreateConnectionPolicyCreateConnectionPolicyRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class CreateConnectionPolicySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateConnectionPolicyRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateConnectionPolicyCreateConnectionPolicyRequest;
    security: CreateConnectionPolicySecurity;
}
export declare class CreateConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
