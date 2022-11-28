package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateConversationParticipantServerList = []string{
	"https://conversations.twilio.com",
}

type UpdateConversationParticipantPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConversationParticipantHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationParticipantEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type UpdateConversationParticipantUpdateConversationParticipantRequest struct {
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

type UpdateConversationParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConversationParticipantRequest struct {
	ServerURL  *string
	PathParams UpdateConversationParticipantPathParams
	Headers    UpdateConversationParticipantHeaders
	Request    *UpdateConversationParticipantUpdateConversationParticipantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConversationParticipantSecurity
}

type UpdateConversationParticipantResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	ConversationsV1ConversationConversationParticipant *shared.ConversationsV1ConversationConversationParticipant
}
