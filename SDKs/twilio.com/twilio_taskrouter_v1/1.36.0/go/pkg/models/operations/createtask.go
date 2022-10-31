package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTaskServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateTaskPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type CreateTaskCreateTaskRequest struct {
	Attributes  *string `form:"name=Attributes"`
	Priority    *int64  `form:"name=Priority"`
	TaskChannel *string `form:"name=TaskChannel"`
	Timeout     *int64  `form:"name=Timeout"`
	WorkflowSid *string `form:"name=WorkflowSid"`
}

type CreateTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTaskRequest struct {
	ServerURL  *string
	PathParams CreateTaskPathParams
	Request    *CreateTaskCreateTaskRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTaskSecurity
}

type CreateTaskResponse struct {
	ContentType               string
	StatusCode                int64
	TaskrouterV1WorkspaceTask *shared.TaskrouterV1WorkspaceTask
}
