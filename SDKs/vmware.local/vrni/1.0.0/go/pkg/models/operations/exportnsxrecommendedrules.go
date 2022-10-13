package operations

import (
	"openapi/pkg/models/shared"
)

type ExportNsxRecommendedRulesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type ExportNsxRecommendedRulesRequest struct {
	Request  *shared.RecommendedRulesRequest `request:"mediaType=application/json"`
	Security ExportNsxRecommendedRulesSecurity
}

type ExportNsxRecommendedRulesResponse struct {
	Body                                                           []byte
	ContentType                                                    string
	StatusCode                                                     int64
	ExportNsxRecommendedRules200ApplicationOctetStreamBinaryString []byte
}
