package operations

import (
	"openapi/pkg/models/shared"
)

var FetchChannelServerList = []string{
	"https://flex-api.twilio.com",
}

type FetchChannelPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
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
	ContentType   string
	StatusCode    int64
	FlexV1Channel *shared.FlexV1Channel
}
