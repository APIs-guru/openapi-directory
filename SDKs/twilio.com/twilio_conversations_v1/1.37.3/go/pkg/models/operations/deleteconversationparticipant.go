package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConversationParticipantServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteConversationParticipantPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationParticipantEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConversationParticipantRequest struct {
	ServerURL  *string
	PathParams DeleteConversationParticipantPathParams
	Headers    DeleteConversationParticipantHeaders
	Security   DeleteConversationParticipantSecurity
}

type DeleteConversationParticipantResponse struct {
	ContentType string
	StatusCode  int64
}
