import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePanoramaFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class UpdatePanoramaFirewallRequest extends SpeakeasyBase {
    pathParams: UpdatePanoramaFirewallPathParams;
    request?: shared.SwitchDataSource;
    security: UpdatePanoramaFirewallSecurity;
}
export declare class UpdatePanoramaFirewallResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
