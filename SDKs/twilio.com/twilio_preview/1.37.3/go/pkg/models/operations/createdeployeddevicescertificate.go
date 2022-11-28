package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeployedDevicesCertificateServerList = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesCertificatePathParams struct {
	FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
}

type CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest struct {
	CertificateData string  `form:"name=CertificateData"`
	DeviceSid       *string `form:"name=DeviceSid"`
	FriendlyName    *string `form:"name=FriendlyName"`
}

type CreateDeployedDevicesCertificateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeployedDevicesCertificateRequest struct {
	ServerURL  *string
	PathParams CreateDeployedDevicesCertificatePathParams
	Request    *CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateDeployedDevicesCertificateSecurity
}

type CreateDeployedDevicesCertificateResponse struct {
	ContentType                            string
	StatusCode                             int64
	PreviewDeployedDevicesFleetCertificate *shared.PreviewDeployedDevicesFleetCertificate
}
