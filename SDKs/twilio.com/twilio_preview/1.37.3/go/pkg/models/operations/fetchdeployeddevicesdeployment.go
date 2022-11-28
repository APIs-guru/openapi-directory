package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDeployedDevicesDeploymentServerList = []string{
	"https://preview.twilio.com",
}

type FetchDeployedDevicesDeploymentPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchDeployedDevicesDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDeployedDevicesDeploymentRequest struct {
	ServerURL  *string
	PathParams FetchDeployedDevicesDeploymentPathParams
	Security   FetchDeployedDevicesDeploymentSecurity
}

type FetchDeployedDevicesDeploymentResponse struct {
	ContentType                           string
	StatusCode                            int64
	PreviewDeployedDevicesFleetDeployment *shared.PreviewDeployedDevicesFleetDeployment
}
