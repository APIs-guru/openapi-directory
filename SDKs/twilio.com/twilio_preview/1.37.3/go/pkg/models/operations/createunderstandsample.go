package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandSampleServerList = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type CreateUnderstandSampleCreateUnderstandSampleRequest struct {
	Language      string  `form:"name=Language"`
	SourceChannel *string `form:"name=SourceChannel"`
	TaggedText    string  `form:"name=TaggedText"`
}

type CreateUnderstandSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandSampleRequest struct {
	ServerURL  *string
	PathParams CreateUnderstandSamplePathParams
	Request    *CreateUnderstandSampleCreateUnderstandSampleRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateUnderstandSampleSecurity
}

type CreateUnderstandSampleResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantTaskSample *shared.PreviewUnderstandAssistantTaskSample
}
