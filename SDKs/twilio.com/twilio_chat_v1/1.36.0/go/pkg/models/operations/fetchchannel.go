package operations

import (
	"openapi/pkg/models/shared"
)

var FetchChannelServers = []string{
	"https://chat.twilio.com",
}

type FetchChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchChannelRequest struct {
	ServerURL  *string
	PathParams FetchChannelPathParams
	Security   FetchChannelSecurity
}

type FetchChannelResponse struct {
	ContentType          string
	StatusCode           int64
	ChatV1ServiceChannel *shared.ChatV1ServiceChannel
}
