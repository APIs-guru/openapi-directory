package operations

import (
"openapi/pkg/models/shared")
var DeleteCredentialServers = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteCredentialPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteCredentialSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteCredentialRequest struct {
    ServerURL *string 
    PathParams DeleteCredentialPathParams 
    Security DeleteCredentialSecurity 
    
}

type DeleteCredentialResponse struct {
    ContentType string 
    StatusCode int64 
    
}

