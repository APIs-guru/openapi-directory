package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateRatePlanServers = []string{
	"https://wireless.twilio.com",
}

type UpdateRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateRatePlanRequestBodyUpdateRatePlanRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	UniqueName   *string `form:"name=UniqueName"`
}

type UpdateRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateRatePlanRequest struct {
	ServerURL  *string
	PathParams UpdateRatePlanPathParams
	Request    *UpdateRatePlanRequestBodyUpdateRatePlanRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateRatePlanSecurity
}

type UpdateRatePlanResponse struct {
	ContentType        string
	StatusCode         int64
	WirelessV1RatePlan *shared.WirelessV1RatePlan
}
