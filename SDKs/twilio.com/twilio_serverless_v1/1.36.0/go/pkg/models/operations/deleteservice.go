package operations

import (
"openapi/pkg/models/shared")
var DeleteServiceServers = []string{
	"https://serverless.twilio.com",
}

type DeleteServicePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteServiceRequest struct {
    ServerURL *string 
    PathParams DeleteServicePathParams 
    Security DeleteServiceSecurity 
    
}

type DeleteServiceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

