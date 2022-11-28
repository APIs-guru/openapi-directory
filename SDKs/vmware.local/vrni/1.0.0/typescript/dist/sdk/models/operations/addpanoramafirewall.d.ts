import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddPanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class AddPanoramaFirewallRequest extends SpeakeasyBase {
    request?: shared.SwitchDataSourceRequest;
    security: AddPanoramaFirewallSecurity;
}
export declare class AddPanoramaFirewallResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
