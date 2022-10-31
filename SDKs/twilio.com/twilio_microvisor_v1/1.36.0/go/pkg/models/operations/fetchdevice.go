package operations

import (
"openapi/pkg/models/shared")
var FetchDeviceServers = []string{
	"https://microvisor.twilio.com",
}

type FetchDevicePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchDeviceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchDeviceRequest struct {
    ServerURL *string 
    PathParams FetchDevicePathParams 
    Security FetchDeviceSecurity 
    
}

type FetchDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    MicrovisorV1Device *shared.MicrovisorV1Device 
    
}

