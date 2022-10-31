package operations

import (
"openapi/pkg/models/shared")
var UpdateServiceConversationScopedWebhookServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceConversationScopedWebhookPathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest struct {
    ConfigurationFilters []string `form:"name=Configuration.Filters"`
    ConfigurationFlowSid *string `form:"name=Configuration.FlowSid"`
    ConfigurationMethod *shared.ServiceConversationScopedWebhookEnumMethodEnum `form:"name=Configuration.Method"`
    ConfigurationTriggers []string `form:"name=Configuration.Triggers"`
    ConfigurationURL *string `form:"name=Configuration.Url"`
    
}

type UpdateServiceConversationScopedWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateServiceConversationScopedWebhookRequest struct {
    ServerURL *string 
    PathParams UpdateServiceConversationScopedWebhookPathParams 
    Request *UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateServiceConversationScopedWebhookSecurity 
    
}

type UpdateServiceConversationScopedWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook *shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook 
    
}

