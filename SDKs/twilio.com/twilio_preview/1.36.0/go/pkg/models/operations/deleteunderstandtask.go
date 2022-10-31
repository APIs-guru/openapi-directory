package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUnderstandTaskServers = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandTaskPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUnderstandTaskSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUnderstandTaskRequest struct {
	ServerURL  *string
	PathParams DeleteUnderstandTaskPathParams
	Security   DeleteUnderstandTaskSecurity
}

type DeleteUnderstandTaskResponse struct {
	ContentType string
	StatusCode  int64
}
