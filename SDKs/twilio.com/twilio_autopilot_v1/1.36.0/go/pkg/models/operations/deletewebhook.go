package operations

import (
"openapi/pkg/models/shared")
var DeleteWebhookServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteWebhookPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteWebhookRequest struct {
    ServerURL *string 
    PathParams DeleteWebhookPathParams 
    Security DeleteWebhookSecurity 
    
}

type DeleteWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    
}

