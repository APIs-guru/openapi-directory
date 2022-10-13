package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type UpdateDeployedDevicesDevicePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeployedDevicesDeviceRequestBodyUpdateDeployedDevicesDeviceRequest struct {
	DeploymentSid *string `form:"name=DeploymentSid"`
	Enabled       *bool   `form:"name=Enabled"`
	FriendlyName  *string `form:"name=FriendlyName"`
	Identity      *string `form:"name=Identity"`
}

type UpdateDeployedDevicesDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeployedDevicesDeviceRequest struct {
	ServerURL  *string
	PathParams UpdateDeployedDevicesDevicePathParams
	Request    *UpdateDeployedDevicesDeviceRequestBodyUpdateDeployedDevicesDeviceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeployedDevicesDeviceSecurity
}

type UpdateDeployedDevicesDeviceResponse struct {
	ContentType                       string
	StatusCode                        int64
	PreviewDeployedDevicesFleetDevice *shared.PreviewDeployedDevicesFleetDevice
}
