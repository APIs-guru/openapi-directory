package operations

import (
"openapi/pkg/models/shared")
var FetchAddressServers = []string{
	"https://api.twilio.com",
}

type FetchAddressPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchAddressRequest struct {
    ServerURL *string 
    PathParams FetchAddressPathParams 
    Security FetchAddressSecurity 
    
}

type FetchAddressResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountAddress *shared.APIV2010AccountAddress 
    
}

