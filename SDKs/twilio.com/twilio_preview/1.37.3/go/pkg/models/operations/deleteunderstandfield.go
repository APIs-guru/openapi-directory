package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUnderstandFieldServerList = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandFieldPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
}

type DeleteUnderstandFieldSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUnderstandFieldRequest struct {
	ServerURL  *string
	PathParams DeleteUnderstandFieldPathParams
	Security   DeleteUnderstandFieldSecurity
}

type DeleteUnderstandFieldResponse struct {
	ContentType string
	StatusCode  int64
}
