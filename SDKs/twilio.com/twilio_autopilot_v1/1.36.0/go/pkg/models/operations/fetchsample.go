package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSampleServers = []string{
	"https://autopilot.twilio.com",
}

type FetchSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSampleRequest struct {
	ServerURL  *string
	PathParams FetchSamplePathParams
	Security   FetchSampleSecurity
}

type FetchSampleResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantTaskSample *shared.AutopilotV1AssistantTaskSample
}
