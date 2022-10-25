package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskActionsServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateTaskActionsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type UpdateTaskActionsUpdateTaskActionsRequest struct {
	Actions *interface{} `form:"name=Actions"`
}

type UpdateTaskActionsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskActionsRequest struct {
	ServerURL  *string
	PathParams UpdateTaskActionsPathParams
	Request    *UpdateTaskActionsUpdateTaskActionsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskActionsSecurity
}

type UpdateTaskActionsResponse struct {
	ContentType                         string
	StatusCode                          int64
	AutopilotV1AssistantTaskTaskActions *shared.AutopilotV1AssistantTaskTaskActions
}
