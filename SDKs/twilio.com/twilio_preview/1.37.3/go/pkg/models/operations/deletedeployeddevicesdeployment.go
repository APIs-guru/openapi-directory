package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteDeployedDevicesDeploymentServerList = []string{
	"https://preview.twilio.com",
}

type DeleteDeployedDevicesDeploymentPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteDeployedDevicesDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteDeployedDevicesDeploymentRequest struct {
	ServerURL  *string
	PathParams DeleteDeployedDevicesDeploymentPathParams
	Security   DeleteDeployedDevicesDeploymentSecurity
}

type DeleteDeployedDevicesDeploymentResponse struct {
	ContentType string
	StatusCode  int64
}
