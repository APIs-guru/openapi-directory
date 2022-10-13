package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesFleetRequestBodyCreateDeployedDevicesFleetRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type CreateDeployedDevicesFleetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeployedDevicesFleetRequest struct {
	ServerURL *string
	Request   *CreateDeployedDevicesFleetRequestBodyCreateDeployedDevicesFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateDeployedDevicesFleetSecurity
}

type CreateDeployedDevicesFleetResponse struct {
	ContentType                 string
	StatusCode                  int64
	PreviewDeployedDevicesFleet *shared.PreviewDeployedDevicesFleet
}
