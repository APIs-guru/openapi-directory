import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCheckpointFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdateCheckpointFirewallRequest extends SpeakeasyBase {
    pathParams: UpdateCheckpointFirewallPathParams;
    request?: shared.SwitchDataSource;
    security: UpdateCheckpointFirewallSecurity;
}
export declare class UpdateCheckpointFirewallResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
