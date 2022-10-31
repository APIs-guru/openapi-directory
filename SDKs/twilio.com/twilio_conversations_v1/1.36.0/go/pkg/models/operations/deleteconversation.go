package operations

import (
"openapi/pkg/models/shared")
var DeleteConversationServers = []string{
	"https://conversations.twilio.com",
}

type DeleteConversationPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteConversationHeaders struct {
    XTwilioWebhookEnabled *shared.ConversationEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
    
}

type DeleteConversationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteConversationRequest struct {
    ServerURL *string 
    PathParams DeleteConversationPathParams 
    Headers DeleteConversationHeaders 
    Security DeleteConversationSecurity 
    
}

type DeleteConversationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

