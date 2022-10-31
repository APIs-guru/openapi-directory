package operations

import (
"openapi/pkg/models/shared")
var DeleteTaskServers = []string{
	"https://taskrouter.twilio.com",
}

type DeleteTaskPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type DeleteTaskHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeleteTaskSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteTaskRequest struct {
    ServerURL *string 
    PathParams DeleteTaskPathParams 
    Headers DeleteTaskHeaders 
    Security DeleteTaskSecurity 
    
}

type DeleteTaskResponse struct {
    ContentType string 
    StatusCode int64 
    
}

