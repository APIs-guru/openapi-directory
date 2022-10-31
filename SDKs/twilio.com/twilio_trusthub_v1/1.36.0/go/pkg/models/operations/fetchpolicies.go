package operations

import (
"openapi/pkg/models/shared")
var FetchPoliciesServers = []string{
	"https://trusthub.twilio.com",
}

type FetchPoliciesPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchPoliciesSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchPoliciesRequest struct {
    ServerURL *string 
    PathParams FetchPoliciesPathParams 
    Security FetchPoliciesSecurity 
    
}

type FetchPoliciesResponse struct {
    ContentType string 
    StatusCode int64 
    TrusthubV1Policies *shared.TrusthubV1Policies 
    
}

