package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateTaskServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateTaskRequestBodyUpdateTaskRequest struct {
	Actions      *interface{} `form:"name=Actions"`
	ActionsURL   *string      `form:"name=ActionsUrl"`
	FriendlyName *string      `form:"name=FriendlyName"`
	UniqueName   *string      `form:"name=UniqueName"`
}

type UpdateTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateTaskRequest struct {
	ServerURL  *string
	PathParams UpdateTaskPathParams
	Request    *UpdateTaskRequestBodyUpdateTaskRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateTaskSecurity
}

type UpdateTaskResponse struct {
	ContentType              string
	StatusCode               int64
	AutopilotV1AssistantTask *shared.AutopilotV1AssistantTask
}
