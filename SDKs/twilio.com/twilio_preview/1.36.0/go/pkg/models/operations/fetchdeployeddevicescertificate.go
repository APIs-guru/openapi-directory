package operations

import (
"openapi/pkg/models/shared")
var FetchDeployedDevicesCertificateServers = []string{
	"https://preview.twilio.com",
}

type FetchDeployedDevicesCertificatePathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchDeployedDevicesCertificateSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchDeployedDevicesCertificateRequest struct {
    ServerURL *string 
    PathParams FetchDeployedDevicesCertificatePathParams 
    Security FetchDeployedDevicesCertificateSecurity 
    
}

type FetchDeployedDevicesCertificateResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewDeployedDevicesFleetCertificate *shared.PreviewDeployedDevicesFleetCertificate 
    
}

