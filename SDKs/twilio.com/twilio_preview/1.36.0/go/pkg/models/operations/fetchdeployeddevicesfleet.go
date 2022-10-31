package operations

import (
"openapi/pkg/models/shared")
var FetchDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type FetchDeployedDevicesFleetPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchDeployedDevicesFleetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchDeployedDevicesFleetRequest struct {
    ServerURL *string 
    PathParams FetchDeployedDevicesFleetPathParams 
    Security FetchDeployedDevicesFleetSecurity 
    
}

type FetchDeployedDevicesFleetResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewDeployedDevicesFleet *shared.PreviewDeployedDevicesFleet 
    
}

