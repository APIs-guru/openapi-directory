package operations

import (
"openapi/pkg/models/shared")
var DeleteSessionServers = []string{
	"https://proxy.twilio.com",
}

type DeleteSessionPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteSessionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSessionRequest struct {
    ServerURL *string 
    PathParams DeleteSessionPathParams 
    Security DeleteSessionSecurity 
    
}

type DeleteSessionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

