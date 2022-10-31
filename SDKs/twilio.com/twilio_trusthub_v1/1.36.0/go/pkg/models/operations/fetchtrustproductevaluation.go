package operations

import (
"openapi/pkg/models/shared")
var FetchTrustProductEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type FetchTrustProductEvaluationPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
    
}

type FetchTrustProductEvaluationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTrustProductEvaluationRequest struct {
    ServerURL *string 
    PathParams FetchTrustProductEvaluationPathParams 
    Security FetchTrustProductEvaluationSecurity 
    
}

type FetchTrustProductEvaluationResponse struct {
    ContentType string 
    StatusCode int64 
    TrusthubV1TrustProductTrustProductEvaluation *shared.TrusthubV1TrustProductTrustProductEvaluation 
    
}

