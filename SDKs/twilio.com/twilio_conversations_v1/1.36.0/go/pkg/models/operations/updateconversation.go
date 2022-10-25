package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateConversationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConversationPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConversationHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateConversationUpdateConversationRequest struct {
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

type UpdateConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConversationRequest struct {
	ServerURL  *string
	PathParams UpdateConversationPathParams
	Headers    UpdateConversationHeaders
	Request    *UpdateConversationUpdateConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConversationSecurity
}

type UpdateConversationResponse struct {
	ContentType                 string
	StatusCode                  int64
	ConversationsV1Conversation *shared.ConversationsV1Conversation
}
