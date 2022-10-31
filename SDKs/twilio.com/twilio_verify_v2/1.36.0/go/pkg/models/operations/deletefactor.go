package operations

import (
"openapi/pkg/models/shared")
var DeleteFactorServers = []string{
	"https://verify.twilio.com",
}

type DeleteFactorPathParams struct {
    Identity string `pathParam:"style=simple,explode=false,name=Identity"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteFactorSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteFactorRequest struct {
    ServerURL *string 
    PathParams DeleteFactorPathParams 
    Security DeleteFactorSecurity 
    
}

type DeleteFactorResponse struct {
    ContentType string 
    StatusCode int64 
    
}

