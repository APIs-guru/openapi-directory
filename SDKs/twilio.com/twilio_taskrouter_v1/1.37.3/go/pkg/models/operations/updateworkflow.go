package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWorkflowServerList = []string{
	"https://taskrouter.twilio.com",
}

type UpdateWorkflowPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateWorkflowUpdateWorkflowRequest struct {
	AssignmentCallbackURL         *string `form:"name=AssignmentCallbackUrl"`
	Configuration                 *string `form:"name=Configuration"`
	FallbackAssignmentCallbackURL *string `form:"name=FallbackAssignmentCallbackUrl"`
	FriendlyName                  *string `form:"name=FriendlyName"`
	ReEvaluateTasks               *string `form:"name=ReEvaluateTasks"`
	TaskReservationTimeout        *int64  `form:"name=TaskReservationTimeout"`
}

type UpdateWorkflowSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWorkflowRequest struct {
	ServerURL  *string
	PathParams UpdateWorkflowPathParams
	Request    *UpdateWorkflowUpdateWorkflowRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWorkflowSecurity
}

type UpdateWorkflowResponse struct {
	ContentType                   string
	StatusCode                    int64
	TaskrouterV1WorkspaceWorkflow *shared.TaskrouterV1WorkspaceWorkflow
}
