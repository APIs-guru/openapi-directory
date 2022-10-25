package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateServiceConversationServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceConversationPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type CreateServiceConversationHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateServiceConversationCreateServiceConversationRequest struct {
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

type CreateServiceConversationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceConversationRequest struct {
	ServerURL  *string
	PathParams CreateServiceConversationPathParams
	Headers    CreateServiceConversationHeaders
	Request    *CreateServiceConversationCreateServiceConversationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceConversationSecurity
}

type CreateServiceConversationResponse struct {
	ContentType                               string
	StatusCode                                int64
	ConversationsV1ServiceServiceConversation *shared.ConversationsV1ServiceServiceConversation
}
