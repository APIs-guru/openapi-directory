import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRecommendedRulesSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class ListRecommendedRulesRequest extends SpeakeasyBase {
    request?: shared.RecommendedRulesRequest;
    security: ListRecommendedRulesSecurity;
}
export declare class ListRecommendedRulesResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    recommendedRules?: shared.RecommendedRules;
    statusCode: number;
}
