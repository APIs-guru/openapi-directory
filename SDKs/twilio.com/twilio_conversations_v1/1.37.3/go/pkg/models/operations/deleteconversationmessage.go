package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConversationMessageServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationMessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConversationMessageRequest struct {
	ServerURL  *string
	PathParams DeleteConversationMessagePathParams
	Headers    DeleteConversationMessageHeaders
	Security   DeleteConversationMessageSecurity
}

type DeleteConversationMessageResponse struct {
	ContentType string
	StatusCode  int64
}
