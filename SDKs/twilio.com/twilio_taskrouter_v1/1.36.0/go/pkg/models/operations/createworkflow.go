package operations

import (
"openapi/pkg/models/shared")
var CreateWorkflowServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateWorkflowPathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type CreateWorkflowCreateWorkflowRequest struct {
    AssignmentCallbackURL *string `form:"name=AssignmentCallbackUrl"`
    Configuration string `form:"name=Configuration"`
    FallbackAssignmentCallbackURL *string `form:"name=FallbackAssignmentCallbackUrl"`
    FriendlyName string `form:"name=FriendlyName"`
    TaskReservationTimeout *int64 `form:"name=TaskReservationTimeout"`
    
}

type CreateWorkflowSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateWorkflowRequest struct {
    ServerURL *string 
    PathParams CreateWorkflowPathParams 
    Request *CreateWorkflowCreateWorkflowRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateWorkflowSecurity 
    
}

type CreateWorkflowResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkflow *shared.TaskrouterV1WorkspaceWorkflow 
    
}

