package operations

import (
"openapi/pkg/models/shared")
var CreateTrustProductEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type CreateTrustProductEvaluationPathParams struct {
    TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
    
}

type CreateTrustProductEvaluationCreateTrustProductEvaluationRequest struct {
    PolicySid string `form:"name=PolicySid"`
    
}

type CreateTrustProductEvaluationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateTrustProductEvaluationRequest struct {
    ServerURL *string 
    PathParams CreateTrustProductEvaluationPathParams 
    Request *CreateTrustProductEvaluationCreateTrustProductEvaluationRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateTrustProductEvaluationSecurity 
    
}

type CreateTrustProductEvaluationResponse struct {
    ContentType string 
    StatusCode int64 
    TrusthubV1TrustProductTrustProductEvaluation *shared.TrusthubV1TrustProductTrustProductEvaluation 
    
}

