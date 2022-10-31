package operations

import (
"openapi/pkg/models/shared")
var FetchConfigurationWebhookServers = []string{
	"https://conversations.twilio.com",
}

type FetchConfigurationWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConfigurationWebhookRequest struct {
    ServerURL *string 
    Security FetchConfigurationWebhookSecurity 
    
}

type FetchConfigurationWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ConfigurationConfigurationWebhook *shared.ConversationsV1ConfigurationConfigurationWebhook 
    
}

