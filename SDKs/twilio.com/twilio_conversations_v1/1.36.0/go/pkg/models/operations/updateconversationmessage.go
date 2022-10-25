package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateConversationMessageServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConversationMessagePathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
	Sid             string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConversationMessageHeaders struct {
	XTwilioWebhookEnabled *shared.ConversationMessageEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateConversationMessageUpdateConversationMessageRequest struct {
	Attributes  *string    `form:"name=Attributes"`
	Author      *string    `form:"name=Author"`
	Body        *string    `form:"name=Body"`
	DateCreated *time.Time `form:"name=DateCreated"`
	DateUpdated *time.Time `form:"name=DateUpdated"`
}

type UpdateConversationMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConversationMessageRequest struct {
	ServerURL  *string
	PathParams UpdateConversationMessagePathParams
	Headers    UpdateConversationMessageHeaders
	Request    *UpdateConversationMessageUpdateConversationMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConversationMessageSecurity
}

type UpdateConversationMessageResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ConversationsV1ConversationConversationMessage *shared.ConversationsV1ConversationConversationMessage
}
