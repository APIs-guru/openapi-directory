package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateServiceConversationMessageServerList = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceConversationMessagePathParams struct {
	ChatServiceSid  string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type UpdateServiceConversationMessageUpdateServiceConversationMessageRequest struct {
	Attributes  *string    `form:"name=Attributes"`
	Author      *string    `form:"name=Author"`
	Body        *string    `form:"name=Body"`
	DateCreated *time.Time `form:"name=DateCreated"`
	DateUpdated *time.Time `form:"name=DateUpdated"`
}

type UpdateServiceConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceConversationMessageRequest struct {
	ServerURL  *string
	PathParams UpdateServiceConversationMessagePathParams
	Headers    UpdateServiceConversationMessageHeaders
	Request    *UpdateServiceConversationMessageUpdateServiceConversationMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceConversationMessageSecurity
}

type UpdateServiceConversationMessageResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	ConversationsV1ServiceServiceConversationServiceConversationMessage *shared.ConversationsV1ServiceServiceConversationServiceConversationMessage
}
