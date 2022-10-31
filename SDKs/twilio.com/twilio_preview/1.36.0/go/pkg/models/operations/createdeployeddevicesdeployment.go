package operations

import (
"openapi/pkg/models/shared")
var CreateDeployedDevicesDeploymentServers = []string{
	"https://preview.twilio.com",
}

type CreateDeployedDevicesDeploymentPathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    
}

type CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    SyncServiceSid *string `form:"name=SyncServiceSid"`
    
}

type CreateDeployedDevicesDeploymentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateDeployedDevicesDeploymentRequest struct {
    ServerURL *string 
    PathParams CreateDeployedDevicesDeploymentPathParams 
    Request *CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateDeployedDevicesDeploymentSecurity 
    
}

type CreateDeployedDevicesDeploymentResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewDeployedDevicesFleetDeployment *shared.PreviewDeployedDevicesFleetDeployment 
    
}

