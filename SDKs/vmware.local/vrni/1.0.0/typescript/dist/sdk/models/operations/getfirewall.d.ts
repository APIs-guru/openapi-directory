import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFirewallQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFirewallRequest extends SpeakeasyBase {
    pathParams: GetFirewallPathParams;
    queryParams: GetFirewallQueryParams;
    security: GetFirewallSecurity;
}
export declare class GetFirewallResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseFirewallRule?: shared.BaseFirewallRule;
    contentType: string;
    statusCode: number;
}
