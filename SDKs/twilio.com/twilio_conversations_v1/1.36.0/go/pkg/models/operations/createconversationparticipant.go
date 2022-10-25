package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type CreateConversationParticipantPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationParticipantEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateConversationParticipantCreateConversationParticipantRequest struct {
	Attributes                       *string    `form:"name=Attributes"`
	DateCreated                      *time.Time `form:"name=DateCreated"`
	DateUpdated                      *time.Time `form:"name=DateUpdated"`
	Identity                         *string    `form:"name=Identity"`
	MessagingBindingAddress          *string    `form:"name=MessagingBinding.Address"`
	MessagingBindingProjectedAddress *string    `form:"name=MessagingBinding.ProjectedAddress"`
	MessagingBindingProxyAddress     *string    `form:"name=MessagingBinding.ProxyAddress"`
	RoleSid                          *string    `form:"name=RoleSid"`
}

type CreateConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateConversationParticipantRequest struct {
	ServerURL  *string
	PathParams CreateConversationParticipantPathParams
	Headers    CreateConversationParticipantHeaders
	Request    *CreateConversationParticipantCreateConversationParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateConversationParticipantSecurity
}

type CreateConversationParticipantResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ConversationsV1ConversationConversationParticipant *shared.ConversationsV1ConversationConversationParticipant
}
