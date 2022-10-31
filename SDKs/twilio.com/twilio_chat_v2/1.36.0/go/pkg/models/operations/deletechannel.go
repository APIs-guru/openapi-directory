package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteChannelServers = []string{
	"https://chat.twilio.com",
}

type DeleteChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteChannelHeaders struct {
	XTwilioWebhookEnabled *shared.ChannelEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteChannelRequest struct {
	ServerURL  *string
	PathParams DeleteChannelPathParams
	Headers    DeleteChannelHeaders
	Security   DeleteChannelSecurity
}

type DeleteChannelResponse struct {
	ContentType string
	StatusCode  int64
}
