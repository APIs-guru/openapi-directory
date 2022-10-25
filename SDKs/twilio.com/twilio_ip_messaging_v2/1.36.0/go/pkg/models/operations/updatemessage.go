package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var UpdateMessageServers = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateMessagePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMessageHeaders struct {
	XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type UpdateMessageUpdateMessageRequest struct {
	Attributes    *string    `form:"name=Attributes"`
	Body          *string    `form:"name=Body"`
	DateCreated   *time.Time `form:"name=DateCreated"`
	DateUpdated   *time.Time `form:"name=DateUpdated"`
	From          *string    `form:"name=From"`
	LastUpdatedBy *string    `form:"name=LastUpdatedBy"`
}

type UpdateMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMessageRequest struct {
	ServerURL  *string
	PathParams UpdateMessagePathParams
	Headers    UpdateMessageHeaders
	Request    *UpdateMessageUpdateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMessageSecurity
}

type UpdateMessageResponse struct {
	ContentType                        string
	StatusCode                         int64
	IPMessagingV2ServiceChannelMessage *shared.IPMessagingV2ServiceChannelMessage
}
