package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteDeployedDevicesKeyServerList = []string{
	"https://preview.twilio.com",
}

type DeleteDeployedDevicesKeyPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteDeployedDevicesKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteDeployedDevicesKeyRequest struct {
	ServerURL  *string
	PathParams DeleteDeployedDevicesKeyPathParams
	Security   DeleteDeployedDevicesKeySecurity
}

type DeleteDeployedDevicesKeyResponse struct {
	ContentType string
	StatusCode  int64
}
