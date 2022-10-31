package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateServiceConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceConversationParticipantPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest struct {
	Attributes                       *string    `form:"name=Attributes"`
	DateCreated                      *time.Time `form:"name=DateCreated"`
	DateUpdated                      *time.Time `form:"name=DateUpdated"`
	Identity                         *string    `form:"name=Identity"`
	LastReadMessageIndex             *int64     `form:"name=LastReadMessageIndex"`
	LastReadTimestamp                *string    `form:"name=LastReadTimestamp"`
	MessagingBindingProjectedAddress *string    `form:"name=MessagingBinding.ProjectedAddress"`
	MessagingBindingProxyAddress     *string    `form:"name=MessagingBinding.ProxyAddress"`
	RoleSid                          *string    `form:"name=RoleSid"`
}

type UpdateServiceConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceConversationParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateServiceConversationParticipantPathParams
	Headers    UpdateServiceConversationParticipantHeaders
	Request    *UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceConversationParticipantSecurity
}

type UpdateServiceConversationParticipantResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	ConversationsV1ServiceServiceConversationServiceConversationParticipant *shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant
}
