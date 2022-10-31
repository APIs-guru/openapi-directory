package operations

import (
"openapi/pkg/models/shared")
var DeleteUsAppToPersonServers = []string{
	"https://messaging.twilio.com",
}

type DeleteUsAppToPersonPathParams struct {
    MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteUsAppToPersonSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUsAppToPersonRequest struct {
    ServerURL *string 
    PathParams DeleteUsAppToPersonPathParams 
    Security DeleteUsAppToPersonSecurity 
    
}

type DeleteUsAppToPersonResponse struct {
    ContentType string 
    StatusCode int64 
    
}

