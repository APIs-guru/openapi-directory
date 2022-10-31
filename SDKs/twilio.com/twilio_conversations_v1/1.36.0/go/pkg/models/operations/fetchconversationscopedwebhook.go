package operations

import (
"openapi/pkg/models/shared")
var FetchConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type FetchConversationScopedWebhookPathParams struct {
    ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConversationScopedWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConversationScopedWebhookRequest struct {
    ServerURL *string 
    PathParams FetchConversationScopedWebhookPathParams 
    Security FetchConversationScopedWebhookSecurity 
    
}

type FetchConversationScopedWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ConversationConversationScopedWebhook *shared.ConversationsV1ConversationConversationScopedWebhook 
    
}

