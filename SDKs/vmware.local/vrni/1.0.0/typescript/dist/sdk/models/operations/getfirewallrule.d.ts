import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFirewallRulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFirewallRuleQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetFirewallRuleSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFirewallRuleRequest extends SpeakeasyBase {
    pathParams: GetFirewallRulePathParams;
    queryParams: GetFirewallRuleQueryParams;
    security: GetFirewallRuleSecurity;
}
export declare class GetFirewallRuleResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseFirewallRule?: shared.BaseFirewallRule;
    contentType: string;
    statusCode: number;
}
