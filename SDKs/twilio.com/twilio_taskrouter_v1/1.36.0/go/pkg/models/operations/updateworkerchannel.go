package operations

import (
"openapi/pkg/models/shared")
var UpdateWorkerChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateWorkerChannelPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkerSid string `pathParam:"style=simple,explode=false,name=WorkerSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type UpdateWorkerChannelUpdateWorkerChannelRequest struct {
    Available *bool `form:"name=Available"`
    Capacity *int64 `form:"name=Capacity"`
    
}

type UpdateWorkerChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateWorkerChannelRequest struct {
    ServerURL *string 
    PathParams UpdateWorkerChannelPathParams 
    Request *UpdateWorkerChannelUpdateWorkerChannelRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateWorkerChannelSecurity 
    
}

type UpdateWorkerChannelResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkerWorkerChannel *shared.TaskrouterV1WorkspaceWorkerWorkerChannel 
    
}

