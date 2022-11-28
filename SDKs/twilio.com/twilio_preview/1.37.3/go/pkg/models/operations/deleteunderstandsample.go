package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUnderstandSampleServerList = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type DeleteUnderstandSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUnderstandSampleRequest struct {
	ServerURL  *string
	PathParams DeleteUnderstandSamplePathParams
	Security   DeleteUnderstandSampleSecurity
}

type DeleteUnderstandSampleResponse struct {
	ContentType string
	StatusCode  int64
}
