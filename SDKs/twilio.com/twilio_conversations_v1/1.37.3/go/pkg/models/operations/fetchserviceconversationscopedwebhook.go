package operations

import (
	"openapi/pkg/models/shared"
)

var FetchServiceConversationScopedWebhookServerList = []string{
	"https://conversations.twilio.com",
}

type FetchServiceConversationScopedWebhookPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchServiceConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchServiceConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams FetchServiceConversationScopedWebhookPathParams
	Security   FetchServiceConversationScopedWebhookSecurity
}

type FetchServiceConversationScopedWebhookResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook *shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook
}
