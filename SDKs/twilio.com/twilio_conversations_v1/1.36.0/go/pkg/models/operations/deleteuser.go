package operations

import (
"openapi/pkg/models/shared")
var DeleteUserServers = []string{
	"https://conversations.twilio.com",
}

type DeleteUserPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteUserHeaders struct {
    XTwilioWebhookEnabled *shared.UserEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
    
}

type DeleteUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteUserRequest struct {
    ServerURL *string 
    PathParams DeleteUserPathParams 
    Headers DeleteUserHeaders 
    Security DeleteUserSecurity 
    
}

type DeleteUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

