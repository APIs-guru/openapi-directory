package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConversationScopedWebhookServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteConversationScopedWebhookPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams DeleteConversationScopedWebhookPathParams
	Security   DeleteConversationScopedWebhookSecurity
}

type DeleteConversationScopedWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
