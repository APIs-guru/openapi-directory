package operations

import (
"openapi/pkg/models/shared")
var FetchFactorServers = []string{
	"https://verify.twilio.com",
}

type FetchFactorPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFactorSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFactorRequest struct {
    ServerURL *string 
    PathParams FetchFactorPathParams 
    Security FetchFactorSecurity 
    
}

type FetchFactorResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceEntityFactor *shared.VerifyV2ServiceEntityFactor 
    
}

