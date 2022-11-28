package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceConversationScopedWebhookServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceConversationScopedWebhookPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams DeleteServiceConversationScopedWebhookPathParams
	Security   DeleteServiceConversationScopedWebhookSecurity
}

type DeleteServiceConversationScopedWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
