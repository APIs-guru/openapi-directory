import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCheckpointFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetCheckpointFirewallRequest extends SpeakeasyBase {
    pathParams: GetCheckpointFirewallPathParams;
    security: GetCheckpointFirewallSecurity;
}
export declare class GetCheckpointFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
