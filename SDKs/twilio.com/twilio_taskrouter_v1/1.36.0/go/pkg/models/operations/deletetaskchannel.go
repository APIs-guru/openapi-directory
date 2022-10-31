package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type DeleteTaskChannelPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type DeleteTaskChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTaskChannelRequest struct {
	ServerURL  *string
	PathParams DeleteTaskChannelPathParams
	Security   DeleteTaskChannelSecurity
}

type DeleteTaskChannelResponse struct {
	ContentType string
	StatusCode  int64
}
