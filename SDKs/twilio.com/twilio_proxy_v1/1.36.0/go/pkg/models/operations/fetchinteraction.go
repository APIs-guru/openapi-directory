package operations

import (
"openapi/pkg/models/shared")
var FetchInteractionServers = []string{
	"https://proxy.twilio.com",
}

type FetchInteractionPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchInteractionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchInteractionRequest struct {
    ServerURL *string 
    PathParams FetchInteractionPathParams 
    Security FetchInteractionSecurity 
    
}

type FetchInteractionResponse struct {
    ContentType string 
    StatusCode int64 
    ProxyV1ServiceSessionInteraction *shared.ProxyV1ServiceSessionInteraction 
    
}

