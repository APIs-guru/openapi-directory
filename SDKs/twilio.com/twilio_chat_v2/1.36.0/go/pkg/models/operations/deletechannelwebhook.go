package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteChannelWebhookServers = []string{
	"https://chat.twilio.com",
}

type DeleteChannelWebhookPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteChannelWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteChannelWebhookRequest struct {
	ServerURL  *string
	PathParams DeleteChannelWebhookPathParams
	Security   DeleteChannelWebhookSecurity
}

type DeleteChannelWebhookResponse struct {
	ContentType string
	StatusCode  int64
}
