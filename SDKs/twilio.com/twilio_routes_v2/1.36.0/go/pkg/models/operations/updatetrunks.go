package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTrunksServers = []string{
	"https://routes.twilio.com",
}

type UpdateTrunksPathParams struct {
	SipTrunkDomain string `pathParam:"style=simple,explode=false,name=SipTrunkDomain"`
}

type UpdateTrunksRequestBodyUpdateTrunksRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	VoiceRegion  *string `form:"name=VoiceRegion"`
}

type UpdateTrunksSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTrunksRequest struct {
	ServerURL  *string
	PathParams UpdateTrunksPathParams
	Request    *UpdateTrunksRequestBodyUpdateTrunksRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTrunksSecurity
}

type UpdateTrunksResponse struct {
	ContentType    string
	StatusCode     int64
	RoutesV2Trunks *shared.RoutesV2Trunks
}
