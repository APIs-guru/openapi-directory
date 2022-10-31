package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTaskServers = []string{
	"https://autopilot.twilio.com",
}

type CreateTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type CreateTaskCreateTaskRequest struct {
	Actions      *interface{} `form:"name=Actions"`
	ActionsURL   *string      `form:"name=ActionsUrl"`
	FriendlyName *string      `form:"name=FriendlyName"`
	UniqueName   string       `form:"name=UniqueName"`
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
	ContentType              string
	StatusCode               int64
	AutopilotV1AssistantTask *shared.AutopilotV1AssistantTask
}
