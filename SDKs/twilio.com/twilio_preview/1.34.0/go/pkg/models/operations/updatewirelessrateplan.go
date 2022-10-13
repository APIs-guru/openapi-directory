package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWirelessRatePlanServers = []string{
	"https://preview.twilio.com",
}

type UpdateWirelessRatePlanPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWirelessRatePlanRequestBodyUpdateWirelessRatePlanRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	UniqueName   *string `form:"name=UniqueName"`
}

type UpdateWirelessRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWirelessRatePlanRequest struct {
	ServerURL  *string
	PathParams UpdateWirelessRatePlanPathParams
	Request    *UpdateWirelessRatePlanRequestBodyUpdateWirelessRatePlanRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWirelessRatePlanSecurity
}

type UpdateWirelessRatePlanResponse struct {
	ContentType             string
	StatusCode              int64
	PreviewWirelessRatePlan *shared.PreviewWirelessRatePlan
}
