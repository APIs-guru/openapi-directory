package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCommandServerList = []string{
	"https://wireless.twilio.com",
}

type FetchCommandPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCommandRequest struct {
	ServerURL  *string
	PathParams FetchCommandPathParams
	Security   FetchCommandSecurity
}

type FetchCommandResponse struct {
	ContentType       string
	StatusCode        int64
	WirelessV1Command *shared.WirelessV1Command
}
