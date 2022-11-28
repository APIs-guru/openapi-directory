package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWirelessSimServerList = []string{
	"https://preview.twilio.com",
}

type FetchWirelessSimPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchWirelessSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWirelessSimRequest struct {
	ServerURL  *string
	PathParams FetchWirelessSimPathParams
	Security   FetchWirelessSimSecurity
}

type FetchWirelessSimResponse struct {
	ContentType        string
	StatusCode         int64
	PreviewWirelessSim *shared.PreviewWirelessSim
}
