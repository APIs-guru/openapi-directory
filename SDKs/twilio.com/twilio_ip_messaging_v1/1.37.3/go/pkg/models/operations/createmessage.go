package operations

import (
	"openapi/pkg/models/shared"
)

var CreateMessageServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateMessagePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateMessageCreateMessageRequest struct {
	Attributes *string `form:"name=Attributes"`
	Body       string  `form:"name=Body"`
	From       *string `form:"name=From"`
}

type CreateMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateMessageRequest struct {
	ServerURL  *string
	PathParams CreateMessagePathParams
	Request    *CreateMessageCreateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateMessageSecurity
}

type CreateMessageResponse struct {
	ContentType                        string
	StatusCode                         int64
	IPMessagingV1ServiceChannelMessage *shared.IPMessagingV1ServiceChannelMessage
}
