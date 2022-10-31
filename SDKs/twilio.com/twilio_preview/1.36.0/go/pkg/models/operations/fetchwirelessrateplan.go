package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWirelessRatePlanServers = []string{
	"https://preview.twilio.com",
}

type FetchWirelessRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchWirelessRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWirelessRatePlanRequest struct {
	ServerURL  *string
	PathParams FetchWirelessRatePlanPathParams
	Security   FetchWirelessRatePlanSecurity
}

type FetchWirelessRatePlanResponse struct {
	ContentType             string
	StatusCode              int64
	PreviewWirelessRatePlan *shared.PreviewWirelessRatePlan
}
