package operations

import (
"openapi/pkg/models/shared")
var FetchDeployedDevicesKeyServers = []string{
	"https://preview.twilio.com",
}

type FetchDeployedDevicesKeyPathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchDeployedDevicesKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchDeployedDevicesKeyRequest struct {
    ServerURL *string 
    PathParams FetchDeployedDevicesKeyPathParams 
    Security FetchDeployedDevicesKeySecurity 
    
}

type FetchDeployedDevicesKeyResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewDeployedDevicesFleetKey *shared.PreviewDeployedDevicesFleetKey 
    
}

