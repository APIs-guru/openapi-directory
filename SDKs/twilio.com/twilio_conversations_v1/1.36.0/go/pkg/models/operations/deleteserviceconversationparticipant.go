package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteServiceConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceConversationParticipantPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteServiceConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type DeleteServiceConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteServiceConversationParticipantRequest struct {
	ServerURL  *string
	PathParams DeleteServiceConversationParticipantPathParams
	Headers    DeleteServiceConversationParticipantHeaders
	Security   DeleteServiceConversationParticipantSecurity
}

type DeleteServiceConversationParticipantResponse struct {
	ContentType string
	StatusCode  int64
}
