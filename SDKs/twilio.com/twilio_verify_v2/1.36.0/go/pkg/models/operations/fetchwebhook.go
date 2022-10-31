package operations

import (
"openapi/pkg/models/shared")
var FetchWebhookServers = []string{
	"https://verify.twilio.com",
}

type FetchWebhookPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWebhookRequest struct {
    ServerURL *string 
    PathParams FetchWebhookPathParams 
    Security FetchWebhookSecurity 
    
}

type FetchWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceWebhook *shared.VerifyV2ServiceWebhook 
    
}

