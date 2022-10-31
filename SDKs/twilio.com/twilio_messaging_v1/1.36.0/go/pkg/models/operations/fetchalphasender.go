package operations

import (
"openapi/pkg/models/shared")
var FetchAlphaSenderServers = []string{
	"https://messaging.twilio.com",
}

type FetchAlphaSenderPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchAlphaSenderSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchAlphaSenderRequest struct {
    ServerURL *string 
    PathParams FetchAlphaSenderPathParams 
    Security FetchAlphaSenderSecurity 
    
}

type FetchAlphaSenderResponse struct {
    ContentType string 
    StatusCode int64 
    MessagingV1ServiceAlphaSender *shared.MessagingV1ServiceAlphaSender 
    
}

