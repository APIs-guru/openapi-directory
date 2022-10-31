package operations

import (
"openapi/pkg/models/shared")
var CreateEvaluationServers = []string{
	"https://numbers.twilio.com",
}

type CreateEvaluationPathParams struct {
    BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
    
}

type CreateEvaluationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateEvaluationRequest struct {
    ServerURL *string 
    PathParams CreateEvaluationPathParams 
    Security CreateEvaluationSecurity 
    
}

type CreateEvaluationResponse struct {
    ContentType string 
    StatusCode int64 
    NumbersV2RegulatoryComplianceBundleEvaluation *shared.NumbersV2RegulatoryComplianceBundleEvaluation 
    
}

