package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEvaluationServers = []string{
	"https://numbers.twilio.com",
}

type FetchEvaluationPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
	Sid       string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEvaluationRequest struct {
	ServerURL  *string
	PathParams FetchEvaluationPathParams
	Security   FetchEvaluationSecurity
}

type FetchEvaluationResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	NumbersV2RegulatoryComplianceBundleEvaluation *shared.NumbersV2RegulatoryComplianceBundleEvaluation
}
