package operations

import (
"openapi/pkg/models/shared")
var DeleteApplicationServers = []string{
	"https://api.twilio.com",
}

type DeleteApplicationPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteApplicationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteApplicationRequest struct {
    ServerURL *string 
    PathParams DeleteApplicationPathParams 
    Security DeleteApplicationSecurity 
    
}

type DeleteApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

