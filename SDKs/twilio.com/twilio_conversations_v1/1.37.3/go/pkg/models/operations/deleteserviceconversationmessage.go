package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceConversationMessageServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceConversationMessagePathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteServiceConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceConversationMessageRequest struct {
	ServerURL  *string
	PathParams DeleteServiceConversationMessagePathParams
	Headers    DeleteServiceConversationMessageHeaders
	Security   DeleteServiceConversationMessageSecurity
}

type DeleteServiceConversationMessageResponse struct {
	ContentType string
	StatusCode  int64
}
