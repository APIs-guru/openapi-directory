package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type UpdateDeployedDevicesFleetPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeployedDevicesFleetRequestBodyUpdateDeployedDevicesFleetRequest struct {
	DefaultDeploymentSid *string `form:"name=DefaultDeploymentSid"`
	FriendlyName         *string `form:"name=FriendlyName"`
}

type UpdateDeployedDevicesFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeployedDevicesFleetRequest struct {
	ServerURL  *string
	PathParams UpdateDeployedDevicesFleetPathParams
	Request    *UpdateDeployedDevicesFleetRequestBodyUpdateDeployedDevicesFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeployedDevicesFleetSecurity
}

type UpdateDeployedDevicesFleetResponse struct {
	ContentType                 string
	StatusCode                  int64
	PreviewDeployedDevicesFleet *shared.PreviewDeployedDevicesFleet
}
