import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRecommendedRulesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListRecommendedRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RecommendedRulesRequest;

  @Metadata()
  security: ListRecommendedRulesSecurity;
}


export class ListRecommendedRulesResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  recommendedRules?: shared.RecommendedRules;

  @Metadata()
  statusCode: number;
}
