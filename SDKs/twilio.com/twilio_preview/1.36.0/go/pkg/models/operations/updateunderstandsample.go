package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandSampleServers = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type UpdateUnderstandSampleRequestBodyUpdateUnderstandSampleRequest struct {
	Language      *string `form:"name=Language"`
	SourceChannel *string `form:"name=SourceChannel"`
	TaggedText    *string `form:"name=TaggedText"`
}

type UpdateUnderstandSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandSampleRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandSamplePathParams
	Request    *UpdateUnderstandSampleRequestBodyUpdateUnderstandSampleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandSampleSecurity
}

type UpdateUnderstandSampleResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantTaskSample *shared.PreviewUnderstandAssistantTaskSample
}
