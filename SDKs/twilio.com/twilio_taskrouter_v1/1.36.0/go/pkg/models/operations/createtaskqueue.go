package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTaskQueueServers = []string{
	"https://taskrouter.twilio.com",
}

type CreateTaskQueuePathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type CreateTaskQueueCreateTaskQueueRequest struct {
	AssignmentActivitySid  *string                            `form:"name=AssignmentActivitySid"`
	FriendlyName           string                             `form:"name=FriendlyName"`
	MaxReservedWorkers     *int64                             `form:"name=MaxReservedWorkers"`
	ReservationActivitySid *string                            `form:"name=ReservationActivitySid"`
	TargetWorkers          *string                            `form:"name=TargetWorkers"`
	TaskOrder              *shared.TaskQueueEnumTaskOrderEnum `form:"name=TaskOrder"`
}

type CreateTaskQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTaskQueueRequest struct {
	ServerURL  *string
	PathParams CreateTaskQueuePathParams
	Request    *CreateTaskQueueCreateTaskQueueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTaskQueueSecurity
}

type CreateTaskQueueResponse struct {
	ContentType                    string
	StatusCode                     int64
	TaskrouterV1WorkspaceTaskQueue *shared.TaskrouterV1WorkspaceTaskQueue
}
