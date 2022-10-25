package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSampleServers = []string{
	"https://autopilot.twilio.com",
}

type CreateSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type CreateSampleCreateSampleRequest struct {
	Language      string  `form:"name=Language"`
	SourceChannel *string `form:"name=SourceChannel"`
	TaggedText    string  `form:"name=TaggedText"`
}

type CreateSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSampleRequest struct {
	ServerURL  *string
	PathParams CreateSamplePathParams
	Request    *CreateSampleCreateSampleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSampleSecurity
}

type CreateSampleResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantTaskSample *shared.AutopilotV1AssistantTaskSample
}
