package operations

import (
"openapi/pkg/models/shared")
var DeleteShortCodeServers = []string{
	"https://proxy.twilio.com",
}

type DeleteShortCodePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteShortCodeRequest struct {
    ServerURL *string 
    PathParams DeleteShortCodePathParams 
    Security DeleteShortCodeSecurity 
    
}

type DeleteShortCodeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

