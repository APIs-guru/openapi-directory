package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteWebChannelServerList = []string{
	"https://flex-api.twilio.com",
}

type DeleteWebChannelPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteWebChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteWebChannelRequest struct {
	ServerURL  *string
	PathParams DeleteWebChannelPathParams
	Security   DeleteWebChannelSecurity
}

type DeleteWebChannelResponse struct {
	ContentType string
	StatusCode  int64
}
