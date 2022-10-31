package operations

import (
"openapi/pkg/models/shared")
var UpdateActivityServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateActivityPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type UpdateActivityUpdateActivityRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type UpdateActivitySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateActivityRequest struct {
    ServerURL *string 
    PathParams UpdateActivityPathParams 
    Request *UpdateActivityUpdateActivityRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateActivitySecurity 
    
}

type UpdateActivityResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceActivity *shared.TaskrouterV1WorkspaceActivity 
    
}

