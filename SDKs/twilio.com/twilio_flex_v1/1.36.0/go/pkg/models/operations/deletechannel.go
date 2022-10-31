package operations

import (
"openapi/pkg/models/shared")
var DeleteChannelServers = []string{
	"https://flex-api.twilio.com",
}

type DeleteChannelPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteChannelRequest struct {
    ServerURL *string 
    PathParams DeleteChannelPathParams 
    Security DeleteChannelSecurity 
    
}

type DeleteChannelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

