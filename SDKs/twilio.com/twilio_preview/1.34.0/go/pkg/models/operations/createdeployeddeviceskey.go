package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeployedDevicesKeyServers = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesKeyPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type CreateDeployedDevicesKeyRequestBodyCreateDeployedDevicesKeyRequest struct {
	DeviceSid    *string `form:"name=DeviceSid"`
	FriendlyName *string `form:"name=FriendlyName"`
}

type CreateDeployedDevicesKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeployedDevicesKeyRequest struct {
	ServerURL  *string
	PathParams CreateDeployedDevicesKeyPathParams
	Request    *CreateDeployedDevicesKeyRequestBodyCreateDeployedDevicesKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateDeployedDevicesKeySecurity
}

type CreateDeployedDevicesKeyResponse struct {
	ContentType                    string
	StatusCode                     int64
	PreviewDeployedDevicesFleetKey *shared.PreviewDeployedDevicesFleetKey
}
