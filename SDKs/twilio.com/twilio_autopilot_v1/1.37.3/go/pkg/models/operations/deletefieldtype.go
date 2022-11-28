package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFieldTypeServerList = []string{
	"https://autopilot.twilio.com",
}

type DeleteFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFieldTypeRequest struct {
	ServerURL  *string
	PathParams DeleteFieldTypePathParams
	Security   DeleteFieldTypeSecurity
}

type DeleteFieldTypeResponse struct {
	ContentType string
	StatusCode  int64
}
