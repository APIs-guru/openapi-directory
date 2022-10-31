package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type FetchDeployedDevicesDevicePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchDeployedDevicesDeviceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDeployedDevicesDeviceRequest struct {
	ServerURL  *string
	PathParams FetchDeployedDevicesDevicePathParams
	Security   FetchDeployedDevicesDeviceSecurity
}

type FetchDeployedDevicesDeviceResponse struct {
	ContentType                       string
	StatusCode                        int64
	PreviewDeployedDevicesFleetDevice *shared.PreviewDeployedDevicesFleetDevice
}
