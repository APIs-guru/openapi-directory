import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableCheckpointFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisableCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisableCheckpointFirewallRequest extends SpeakeasyBase {
    pathParams: DisableCheckpointFirewallPathParams;
    security: DisableCheckpointFirewallSecurity;
}
export declare class DisableCheckpointFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
