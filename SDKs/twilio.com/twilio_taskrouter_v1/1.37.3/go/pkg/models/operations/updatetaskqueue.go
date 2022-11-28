package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskQueueServerList = []string{
	"https://taskrouter.twilio.com",
}

type UpdateTaskQueuePathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type UpdateTaskQueueUpdateTaskQueueRequest struct {
	AssignmentActivitySid  *string                            `form:"name=AssignmentActivitySid"`
	FriendlyName           *string                            `form:"name=FriendlyName"`
	MaxReservedWorkers     *int64                             `form:"name=MaxReservedWorkers"`
	ReservationActivitySid *string                            `form:"name=ReservationActivitySid"`
	TargetWorkers          *string                            `form:"name=TargetWorkers"`
	TaskOrder              *shared.TaskQueueEnumTaskOrderEnum `form:"name=TaskOrder"`
}

type UpdateTaskQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskQueueRequest struct {
	ServerURL  *string
	PathParams UpdateTaskQueuePathParams
	Request    *UpdateTaskQueueUpdateTaskQueueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskQueueSecurity
}

type UpdateTaskQueueResponse struct {
	ContentType                    string
	StatusCode                     int64
	TaskrouterV1WorkspaceTaskQueue *shared.TaskrouterV1WorkspaceTaskQueue
}
