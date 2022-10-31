package operations

import (
"openapi/pkg/models/shared")
var FetchShortCodeServers = []string{
	"https://messaging.twilio.com",
}

type FetchShortCodePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchShortCodeRequest struct {
    ServerURL *string 
    PathParams FetchShortCodePathParams 
    Security FetchShortCodeSecurity 
    
}

type FetchShortCodeResponse struct {
    ContentType string 
    StatusCode int64 
    MessagingV1ServiceShortCode *shared.MessagingV1ServiceShortCode 
    
}

