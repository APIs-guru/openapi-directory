package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFieldValueServerList = []string{
	"https://autopilot.twilio.com",
}

type DeleteFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFieldValueRequest struct {
	ServerURL  *string
	PathParams DeleteFieldValuePathParams
	Security   DeleteFieldValueSecurity
}

type DeleteFieldValueResponse struct {
	ContentType string
	StatusCode  int64
}
