package operations

import (
"openapi/pkg/models/shared")
var FetchTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskChannelPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchTaskChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTaskChannelRequest struct {
    ServerURL *string 
    PathParams FetchTaskChannelPathParams 
    Security FetchTaskChannelSecurity 
    
}

type FetchTaskChannelResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceTaskChannel *shared.TaskrouterV1WorkspaceTaskChannel 
    
}

