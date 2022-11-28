package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteRatePlanServerList = []string{
	"https://wireless.twilio.com",
}

type DeleteRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteRatePlanRequest struct {
	ServerURL  *string
	PathParams DeleteRatePlanPathParams
	Security   DeleteRatePlanSecurity
}

type DeleteRatePlanResponse struct {
	ContentType string
	StatusCode  int64
}
