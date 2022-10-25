package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateServiceConversationParticipantServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceConversationParticipantPathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateServiceConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateServiceConversationParticipantCreateServiceConversationParticipantRequest struct {
	Attributes                       *string    `form:"name=Attributes"`
	DateCreated                      *time.Time `form:"name=DateCreated"`
	DateUpdated                      *time.Time `form:"name=DateUpdated"`
	Identity                         *string    `form:"name=Identity"`
	MessagingBindingAddress          *string    `form:"name=MessagingBinding.Address"`
	MessagingBindingProjectedAddress *string    `form:"name=MessagingBinding.ProjectedAddress"`
	MessagingBindingProxyAddress     *string    `form:"name=MessagingBinding.ProxyAddress"`
	RoleSid                          *string    `form:"name=RoleSid"`
}

type CreateServiceConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceConversationParticipantRequest struct {
	ServerURL  *string
	PathParams CreateServiceConversationParticipantPathParams
	Headers    CreateServiceConversationParticipantHeaders
	Request    *CreateServiceConversationParticipantCreateServiceConversationParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceConversationParticipantSecurity
}

type CreateServiceConversationParticipantResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	ConversationsV1ServiceServiceConversationServiceConversationParticipant *shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant
}
