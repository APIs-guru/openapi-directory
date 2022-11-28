package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRatePlanServerList = []string{
	"https://wireless.twilio.com",
}

type FetchRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRatePlanRequest struct {
	ServerURL  *string
	PathParams FetchRatePlanPathParams
	Security   FetchRatePlanSecurity
}

type FetchRatePlanResponse struct {
	ContentType        string
	StatusCode         int64
	WirelessV1RatePlan *shared.WirelessV1RatePlan
}
