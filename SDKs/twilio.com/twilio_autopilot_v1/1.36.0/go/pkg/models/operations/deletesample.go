package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSampleServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteSamplePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type DeleteSampleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSampleRequest struct {
	ServerURL  *string
	PathParams DeleteSamplePathParams
	Security   DeleteSampleSecurity
}

type DeleteSampleResponse struct {
	ContentType string
	StatusCode  int64
}
