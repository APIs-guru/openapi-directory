package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateServiceConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type CreateServiceConversationMessagePathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateServiceConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type CreateServiceConversationMessageRequestBodyCreateServiceConversationMessageRequest struct {
	Attributes  *string    `form:"name=Attributes"`
	Author      *string    `form:"name=Author"`
	Body        *string    `form:"name=Body"`
	DateCreated *time.Time `form:"name=DateCreated"`
	DateUpdated *time.Time `form:"name=DateUpdated"`
	MediaSid    *string    `form:"name=MediaSid"`
}

type CreateServiceConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceConversationMessageRequest struct {
	ServerURL  *string
	PathParams CreateServiceConversationMessagePathParams
	Headers    CreateServiceConversationMessageHeaders
	Request    *CreateServiceConversationMessageRequestBodyCreateServiceConversationMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateServiceConversationMessageSecurity
}

type CreateServiceConversationMessageResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	ConversationsV1ServiceServiceConversationServiceConversationMessage *shared.ConversationsV1ServiceServiceConversationServiceConversationMessage
}
