package operations

import (
"openapi/pkg/models/shared")
var FetchWirelessCommandServers = []string{
	"https://preview.twilio.com",
}

type FetchWirelessCommandPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchWirelessCommandSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWirelessCommandRequest struct {
    ServerURL *string 
    PathParams FetchWirelessCommandPathParams 
    Security FetchWirelessCommandSecurity 
    
}

type FetchWirelessCommandResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewWirelessCommand *shared.PreviewWirelessCommand 
    
}

