package operations

import (
"openapi/pkg/models/shared")
var CreateDeployedDevicesFleetServers = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type CreateDeployedDevicesFleetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateDeployedDevicesFleetRequest struct {
    ServerURL *string 
    Request *CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateDeployedDevicesFleetSecurity 
    
}

type CreateDeployedDevicesFleetResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewDeployedDevicesFleet *shared.PreviewDeployedDevicesFleet 
    
}

