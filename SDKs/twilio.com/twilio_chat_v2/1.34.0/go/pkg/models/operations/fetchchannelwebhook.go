package operations

import (
	"openapi/pkg/models/shared"
)

var FetchChannelWebhookServers = []string{
	"https://chat.twilio.com",
}

type FetchChannelWebhookPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchChannelWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchChannelWebhookRequest struct {
	ServerURL  *string
	PathParams FetchChannelWebhookPathParams
	Security   FetchChannelWebhookSecurity
}

type FetchChannelWebhookResponse struct {
	ContentType                        string
	StatusCode                         int64
	ChatV2ServiceChannelChannelWebhook *shared.ChatV2ServiceChannelChannelWebhook
}
