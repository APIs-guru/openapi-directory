package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeployedDevicesKeyServerList = []string{
	"https://preview.twilio.com",
}

type UpdateDeployedDevicesKeyPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest struct {
	DeviceSid    *string `form:"name=DeviceSid"`
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateDeployedDevicesKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeployedDevicesKeyRequest struct {
	ServerURL  *string
	PathParams UpdateDeployedDevicesKeyPathParams
	Request    *UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeployedDevicesKeySecurity
}

type UpdateDeployedDevicesKeyResponse struct {
	ContentType                    string
	StatusCode                     int64
	PreviewDeployedDevicesFleetKey *shared.PreviewDeployedDevicesFleetKey
}
