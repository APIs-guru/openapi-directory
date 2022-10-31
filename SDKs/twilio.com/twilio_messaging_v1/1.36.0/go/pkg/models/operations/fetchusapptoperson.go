package operations

import (
"openapi/pkg/models/shared")
var FetchUsAppToPersonServers = []string{
	"https://messaging.twilio.com",
}

type FetchUsAppToPersonPathParams struct {
    MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchUsAppToPersonSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchUsAppToPersonRequest struct {
    ServerURL *string 
    PathParams FetchUsAppToPersonPathParams 
    Security FetchUsAppToPersonSecurity 
    
}

type FetchUsAppToPersonResponse struct {
    ContentType string 
    StatusCode int64 
    MessagingV1ServiceUsAppToPerson *shared.MessagingV1ServiceUsAppToPerson 
    
}

