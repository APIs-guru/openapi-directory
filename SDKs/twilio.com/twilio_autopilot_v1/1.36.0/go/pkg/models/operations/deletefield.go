package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFieldServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type DeleteFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFieldRequest struct {
	ServerURL  *string
	PathParams DeleteFieldPathParams
	Security   DeleteFieldSecurity
}

type DeleteFieldResponse struct {
	ContentType string
	StatusCode  int64
}
