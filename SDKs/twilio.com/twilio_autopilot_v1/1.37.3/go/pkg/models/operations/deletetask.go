package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteTaskServerList = []string{
	"https://autopilot.twilio.com",
}

type DeleteTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteTaskRequest struct {
	ServerURL  *string
	PathParams DeleteTaskPathParams
	Security   DeleteTaskSecurity
}

type DeleteTaskResponse struct {
	ContentType string
	StatusCode  int64
}
