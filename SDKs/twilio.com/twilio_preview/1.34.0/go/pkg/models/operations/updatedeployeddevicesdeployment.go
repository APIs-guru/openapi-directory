package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeployedDevicesDeploymentServers = []string{
	"https://preview.twilio.com",
}

type UpdateDeployedDevicesDeploymentPathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeployedDevicesDeploymentRequestBodyUpdateDeployedDevicesDeploymentRequest struct {
	FriendlyName   *string `form:"name=FriendlyName"`
	SyncServiceSid *string `form:"name=SyncServiceSid"`
}

type UpdateDeployedDevicesDeploymentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeployedDevicesDeploymentRequest struct {
	ServerURL  *string
	PathParams UpdateDeployedDevicesDeploymentPathParams
	Request    *UpdateDeployedDevicesDeploymentRequestBodyUpdateDeployedDevicesDeploymentRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeployedDevicesDeploymentSecurity
}

type UpdateDeployedDevicesDeploymentResponse struct {
	ContentType                           string
	StatusCode                            int64
	PreviewDeployedDevicesFleetDeployment *shared.PreviewDeployedDevicesFleetDeployment
}
