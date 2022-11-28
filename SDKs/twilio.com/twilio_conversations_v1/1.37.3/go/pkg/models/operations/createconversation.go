package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateConversationServerList = []string{
	"https://conversations.twilio.com",
}

type CreateConversationHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type CreateConversationCreateConversationRequest struct {
	Attributes          *string                           `form:"name=Attributes"`
	DateCreated         *time.Time                        `form:"name=DateCreated"`
	DateUpdated         *time.Time                        `form:"name=DateUpdated"`
	FriendlyName        *string                           `form:"name=FriendlyName"`
	MessagingServiceSid *string                           `form:"name=MessagingServiceSid"`
	State               *shared.ConversationEnumStateEnum `form:"name=State"`
	TimersClosed        *string                           `form:"name=Timers.Closed"`
	TimersInactive      *string                           `form:"name=Timers.Inactive"`
	UniqueName          *string                           `form:"name=UniqueName"`
}

type CreateConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateConversationRequest struct {
	ServerURL *string
	Headers   CreateConversationHeaders
	Request   *CreateConversationCreateConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateConversationSecurity
}

type CreateConversationResponse struct {
	ContentType                 string
	StatusCode                  int64
	ConversationsV1Conversation *shared.ConversationsV1Conversation
}
