import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePanoramaFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeletePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class DeletePanoramaFirewallRequest extends SpeakeasyBase {
    pathParams: DeletePanoramaFirewallPathParams;
    security: DeletePanoramaFirewallSecurity;
}
export declare class DeletePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
