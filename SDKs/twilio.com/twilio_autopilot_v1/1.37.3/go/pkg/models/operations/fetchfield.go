package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFieldServerList = []string{
	"https://autopilot.twilio.com",
}

type FetchFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFieldRequest struct {
	ServerURL  *string
	PathParams FetchFieldPathParams
	Security   FetchFieldSecurity
}

type FetchFieldResponse struct {
	ContentType                   string
	StatusCode                    int64
	AutopilotV1AssistantTaskField *shared.AutopilotV1AssistantTaskField
}
