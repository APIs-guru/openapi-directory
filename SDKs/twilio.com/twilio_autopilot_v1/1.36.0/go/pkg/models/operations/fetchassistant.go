package operations

import (
"openapi/pkg/models/shared")
var FetchAssistantServers = []string{
	"https://autopilot.twilio.com",
}

type FetchAssistantPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchAssistantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchAssistantRequest struct {
    ServerURL *string 
    PathParams FetchAssistantPathParams 
    Security FetchAssistantSecurity 
    
}

type FetchAssistantResponse struct {
    ContentType string 
    StatusCode int64 
    AutopilotV1Assistant *shared.AutopilotV1Assistant 
    
}

