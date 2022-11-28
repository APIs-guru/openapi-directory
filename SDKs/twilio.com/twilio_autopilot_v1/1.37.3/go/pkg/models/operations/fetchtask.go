package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskServerList = []string{
	"https://autopilot.twilio.com",
}

type FetchTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskRequest struct {
	ServerURL  *string
	PathParams FetchTaskPathParams
	Security   FetchTaskSecurity
}

type FetchTaskResponse struct {
	ContentType              string
	StatusCode               int64
	AutopilotV1AssistantTask *shared.AutopilotV1AssistantTask
}
