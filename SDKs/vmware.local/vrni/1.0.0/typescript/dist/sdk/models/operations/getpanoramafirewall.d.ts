import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPanoramaFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetPanoramaFirewallRequest extends SpeakeasyBase {
    pathParams: GetPanoramaFirewallPathParams;
    security: GetPanoramaFirewallSecurity;
}
export declare class GetPanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    switchDataSource?: shared.SwitchDataSource;
}
