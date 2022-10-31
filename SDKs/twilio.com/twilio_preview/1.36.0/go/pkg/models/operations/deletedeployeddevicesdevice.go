package operations

import (
"openapi/pkg/models/shared")
var DeleteDeployedDevicesDeviceServers = []string{
	"https://preview.twilio.com",
}

type DeleteDeployedDevicesDevicePathParams struct {
    FleetSid string `pathParam:"style=simple,explode=false,name=FleetSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteDeployedDevicesDeviceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteDeployedDevicesDeviceRequest struct {
    ServerURL *string 
    PathParams DeleteDeployedDevicesDevicePathParams 
    Security DeleteDeployedDevicesDeviceSecurity 
    
}

type DeleteDeployedDevicesDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

