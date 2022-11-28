import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableCheckpointFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnableCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnableCheckpointFirewallRequest extends SpeakeasyBase {
    pathParams: EnableCheckpointFirewallPathParams;
    security: EnableCheckpointFirewallSecurity;
}
export declare class EnableCheckpointFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
