import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddCheckpointFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddCheckpointFirewallRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSourceRequest;
    security: AddCheckpointFirewallSecurity;
}
export declare class AddCheckpointFirewallResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
