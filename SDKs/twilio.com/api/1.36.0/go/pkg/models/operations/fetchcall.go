package operations

import (
"openapi/pkg/models/shared")
var FetchCallServers = []string{
	"https://api.twilio.com",
}

type FetchCallPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchCallSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchCallRequest struct {
    ServerURL *string 
    PathParams FetchCallPathParams 
    Security FetchCallSecurity 
    
}

type FetchCallResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountCall *shared.APIV2010AccountCall 
    
}

