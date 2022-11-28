import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisablePanoramaFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DisablePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DisablePanoramaFirewallRequest extends SpeakeasyBase {
    pathParams: DisablePanoramaFirewallPathParams;
    security: DisablePanoramaFirewallSecurity;
}
export declare class DisablePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
