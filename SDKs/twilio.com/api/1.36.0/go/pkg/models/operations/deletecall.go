package operations

import (
"openapi/pkg/models/shared")
var DeleteCallServers = []string{
	"https://api.twilio.com",
}

type DeleteCallPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteCallSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteCallRequest struct {
    ServerURL *string 
    PathParams DeleteCallPathParams 
    Security DeleteCallSecurity 
    
}

type DeleteCallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

