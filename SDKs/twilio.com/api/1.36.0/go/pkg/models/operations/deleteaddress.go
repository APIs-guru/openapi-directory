package operations

import (
"openapi/pkg/models/shared")
var DeleteAddressServers = []string{
	"https://api.twilio.com",
}

type DeleteAddressPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAddressRequest struct {
    ServerURL *string 
    PathParams DeleteAddressPathParams 
    Security DeleteAddressSecurity 
    
}

type DeleteAddressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

