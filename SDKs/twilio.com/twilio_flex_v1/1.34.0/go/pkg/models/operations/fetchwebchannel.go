package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWebChannelServers = []string{
	"https://flex-api.twilio.com",
}

type FetchWebChannelPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchWebChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWebChannelRequest struct {
	ServerURL  *string
	PathParams FetchWebChannelPathParams
	Security   FetchWebChannelSecurity
}

type FetchWebChannelResponse struct {
	ContentType      string
	StatusCode       int64
	FlexV1WebChannel *shared.FlexV1WebChannel
}
