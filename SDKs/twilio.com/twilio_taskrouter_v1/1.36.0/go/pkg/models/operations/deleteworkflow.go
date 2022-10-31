package operations

import (
"openapi/pkg/models/shared")
var DeleteWorkflowServers = []string{
	"https://taskrouter.twilio.com",
}

type DeleteWorkflowPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type DeleteWorkflowSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteWorkflowRequest struct {
    ServerURL *string 
    PathParams DeleteWorkflowPathParams 
    Security DeleteWorkflowSecurity 
    
}

type DeleteWorkflowResponse struct {
    ContentType string 
    StatusCode int64 
    
}

