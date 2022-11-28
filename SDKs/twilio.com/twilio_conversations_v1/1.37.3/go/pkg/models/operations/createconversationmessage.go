package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var CreateConversationMessageServerList = []string{
	"https://conversations.twilio.com",
}

type CreateConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationMessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type CreateConversationMessageCreateConversationMessageRequest struct {
	Attributes  *string    `form:"name=Attributes"`
	Author      *string    `form:"name=Author"`
	Body        *string    `form:"name=Body"`
	DateCreated *time.Time `form:"name=DateCreated"`
	DateUpdated *time.Time `form:"name=DateUpdated"`
	MediaSid    *string    `form:"name=MediaSid"`
}

type CreateConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateConversationMessageRequest struct {
	ServerURL  *string
	PathParams CreateConversationMessagePathParams
	Headers    CreateConversationMessageHeaders
	Request    *CreateConversationMessageCreateConversationMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateConversationMessageSecurity
}

type CreateConversationMessageResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ConversationsV1ConversationConversationMessage *shared.ConversationsV1ConversationConversationMessage
}
