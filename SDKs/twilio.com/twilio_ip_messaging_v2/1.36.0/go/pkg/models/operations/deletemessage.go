package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMessageServers = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteMessagePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMessageHeaders struct {
	XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"name=X-Twilio-Webhook-Enabled"`
}

type DeleteMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMessageRequest struct {
	ServerURL  *string
	PathParams DeleteMessagePathParams
	Headers    DeleteMessageHeaders
	Security   DeleteMessageSecurity
}

type DeleteMessageResponse struct {
	ContentType string
	StatusCode  int64
}
