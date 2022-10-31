package operations

import (
"openapi/pkg/models/shared")
var DeleteDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type DeleteDeployedDevicesFleetPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteDeployedDevicesFleetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteDeployedDevicesFleetRequest struct {
    ServerURL *string 
    PathParams DeleteDeployedDevicesFleetPathParams 
    Security DeleteDeployedDevicesFleetSecurity 
    
}

type DeleteDeployedDevicesFleetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

