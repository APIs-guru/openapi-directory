package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUnderstandFieldValueServerList = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandFieldValuePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	FieldTypeSid string `pathParam:"style=simple,explode=false,name=FieldTypeSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUnderstandFieldValueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUnderstandFieldValueRequest struct {
	ServerURL  *string
	PathParams DeleteUnderstandFieldValuePathParams
	Security   DeleteUnderstandFieldValueSecurity
}

type DeleteUnderstandFieldValueResponse struct {
	ContentType string
	StatusCode  int64
}
