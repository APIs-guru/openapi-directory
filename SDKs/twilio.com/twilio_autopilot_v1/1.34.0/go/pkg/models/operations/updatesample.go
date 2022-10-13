package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSampleServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type UpdateSampleRequestBodyUpdateSampleRequest struct {
	Language      *string `form:"name=Language"`
	SourceChannel *string `form:"name=SourceChannel"`
	TaggedText    *string `form:"name=TaggedText"`
}

type UpdateSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSampleRequest struct {
	ServerURL  *string
	PathParams UpdateSamplePathParams
	Request    *UpdateSampleRequestBodyUpdateSampleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSampleSecurity
}

type UpdateSampleResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantTaskSample *shared.AutopilotV1AssistantTaskSample
}
