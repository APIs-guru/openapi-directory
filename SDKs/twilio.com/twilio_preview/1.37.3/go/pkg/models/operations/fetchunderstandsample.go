package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandSampleServerList = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type FetchUnderstandSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandSampleRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandSamplePathParams
	Security   FetchUnderstandSampleSecurity
}

type FetchUnderstandSampleResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantTaskSample *shared.PreviewUnderstandAssistantTaskSample
}
