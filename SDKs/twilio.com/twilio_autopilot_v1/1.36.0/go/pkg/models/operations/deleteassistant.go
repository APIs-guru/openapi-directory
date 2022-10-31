package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteAssistantServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteAssistantPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteAssistantRequest struct {
	ServerURL  *string
	PathParams DeleteAssistantPathParams
	Security   DeleteAssistantSecurity
}

type DeleteAssistantResponse struct {
	ContentType string
	StatusCode  int64
}
