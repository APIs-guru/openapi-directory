package operations

import (
	"openapi/pkg/models/shared"
)

type ListRecommendedRulesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ListRecommendedRulesRequest struct {
	Request  *shared.RecommendedRulesRequest `request:"mediaType=application/json"`
	Security ListRecommendedRulesSecurity
}

type ListRecommendedRulesResponse struct {
	APIError         *shared.APIError
	ContentType      string
	RecommendedRules *shared.RecommendedRules
	StatusCode       int64
}
