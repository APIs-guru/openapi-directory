package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesDevicePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type CreateDeployedDevicesDeviceRequestBodyCreateDeployedDevicesDeviceRequest struct {
	DeploymentSid *string `form:"name=DeploymentSid"`
	Enabled       *bool   `form:"name=Enabled"`
	FriendlyName  *string `form:"name=FriendlyName"`
	Identity      *string `form:"name=Identity"`
	UniqueName    *string `form:"name=UniqueName"`
}

type CreateDeployedDevicesDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeployedDevicesDeviceRequest struct {
	ServerURL  *string
	PathParams CreateDeployedDevicesDevicePathParams
	Request    *CreateDeployedDevicesDeviceRequestBodyCreateDeployedDevicesDeviceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateDeployedDevicesDeviceSecurity
}

type CreateDeployedDevicesDeviceResponse struct {
	ContentType                       string
	StatusCode                        int64
	PreviewDeployedDevicesFleetDevice *shared.PreviewDeployedDevicesFleetDevice
}
