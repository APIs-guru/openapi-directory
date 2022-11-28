package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteWirelessRatePlanServerList = []string{
	"https://preview.twilio.com",
}

type DeleteWirelessRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteWirelessRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteWirelessRatePlanRequest struct {
	ServerURL  *string
	PathParams DeleteWirelessRatePlanPathParams
	Security   DeleteWirelessRatePlanSecurity
}

type DeleteWirelessRatePlanResponse struct {
	ContentType string
	StatusCode  int64
}
