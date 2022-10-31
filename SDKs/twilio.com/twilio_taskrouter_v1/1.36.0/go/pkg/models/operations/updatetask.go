package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskServers = []string{
	"https://taskrouter.twilio.com",
}

type UpdateTaskPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateTaskHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type UpdateTaskUpdateTaskRequest struct {
	AssignmentStatus *shared.TaskEnumStatusEnum `form:"name=AssignmentStatus"`
	Attributes       *string                    `form:"name=Attributes"`
	Priority         *int64                     `form:"name=Priority"`
	Reason           *string                    `form:"name=Reason"`
	TaskChannel      *string                    `form:"name=TaskChannel"`
}

type UpdateTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskRequest struct {
	ServerURL  *string
	PathParams UpdateTaskPathParams
	Headers    UpdateTaskHeaders
	Request    *UpdateTaskUpdateTaskRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskSecurity
}

type UpdateTaskResponse struct {
	ContentType               string
	StatusCode                int64
	TaskrouterV1WorkspaceTask *shared.TaskrouterV1WorkspaceTask
}
