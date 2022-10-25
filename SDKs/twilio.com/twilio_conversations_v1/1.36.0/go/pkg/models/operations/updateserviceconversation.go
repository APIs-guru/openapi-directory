package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateServiceConversationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	Sid            string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceConversationHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateServiceConversationUpdateServiceConversationRequest struct {
	Attributes          *string                                  `form:"name=Attributes"`
	DateCreated         *time.Time                               `form:"name=DateCreated"`
	DateUpdated         *time.Time                               `form:"name=DateUpdated"`
	FriendlyName        *string                                  `form:"name=FriendlyName"`
	MessagingServiceSid *string                                  `form:"name=MessagingServiceSid"`
	State               *shared.ServiceConversationEnumStateEnum `form:"name=State"`
	TimersClosed        *string                                  `form:"name=Timers.Closed"`
	TimersInactive      *string                                  `form:"name=Timers.Inactive"`
	UniqueName          *string                                  `form:"name=UniqueName"`
}

type UpdateServiceConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceConversationRequest struct {
	ServerURL  *string
	PathParams UpdateServiceConversationPathParams
	Headers    UpdateServiceConversationHeaders
	Request    *UpdateServiceConversationUpdateServiceConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceConversationSecurity
}

type UpdateServiceConversationResponse struct {
	ContentType                               string
	StatusCode                                int64
	ConversationsV1ServiceServiceConversation *shared.ConversationsV1ServiceServiceConversation
}
