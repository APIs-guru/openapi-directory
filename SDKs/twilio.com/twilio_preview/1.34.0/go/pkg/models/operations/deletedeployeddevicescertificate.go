package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteDeployedDevicesCertificateServers = []string{
	"https://preview.twilio.com",
}

type DeleteDeployedDevicesCertificatePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteDeployedDevicesCertificateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteDeployedDevicesCertificateRequest struct {
	ServerURL  *string
	PathParams DeleteDeployedDevicesCertificatePathParams
	Security   DeleteDeployedDevicesCertificateSecurity
}

type DeleteDeployedDevicesCertificateResponse struct {
	ContentType string
	StatusCode  int64
}
