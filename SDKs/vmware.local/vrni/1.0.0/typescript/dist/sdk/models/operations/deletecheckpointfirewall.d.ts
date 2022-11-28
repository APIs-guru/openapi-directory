import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCheckpointFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeleteCheckpointFirewallRequest extends SpeakeasyBase {
    pathParams: DeleteCheckpointFirewallPathParams;
    security: DeleteCheckpointFirewallSecurity;
}
export declare class DeleteCheckpointFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
