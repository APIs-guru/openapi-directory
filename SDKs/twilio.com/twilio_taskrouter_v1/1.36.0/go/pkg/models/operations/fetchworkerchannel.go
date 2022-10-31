package operations

import (
"openapi/pkg/models/shared")
var FetchWorkerChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkerChannelPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkerSid string `pathParam:"style=simple,explode=false,name=WorkerSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchWorkerChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWorkerChannelRequest struct {
    ServerURL *string 
    PathParams FetchWorkerChannelPathParams 
    Security FetchWorkerChannelSecurity 
    
}

type FetchWorkerChannelResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkerWorkerChannel *shared.TaskrouterV1WorkspaceWorkerWorkerChannel 
    
}

