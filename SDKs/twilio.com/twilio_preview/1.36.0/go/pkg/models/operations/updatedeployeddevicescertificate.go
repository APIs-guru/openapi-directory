package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDeployedDevicesCertificateServers = []string{
	"https://preview.twilio.com",
}

type UpdateDeployedDevicesCertificatePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest struct {
	DeviceSid    *string `form:"name=DeviceSid"`
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateDeployedDevicesCertificateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDeployedDevicesCertificateRequest struct {
	ServerURL  *string
	PathParams UpdateDeployedDevicesCertificatePathParams
	Request    *UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDeployedDevicesCertificateSecurity
}

type UpdateDeployedDevicesCertificateResponse struct {
	ContentType                            string
	StatusCode                             int64
	PreviewDeployedDevicesFleetCertificate *shared.PreviewDeployedDevicesFleetCertificate
}
