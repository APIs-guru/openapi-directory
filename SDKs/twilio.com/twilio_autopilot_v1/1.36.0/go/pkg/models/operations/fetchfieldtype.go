package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFieldTypeServers = []string{
	"https://autopilot.twilio.com",
}

type FetchFieldTypePathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchFieldTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFieldTypeRequest struct {
	ServerURL  *string
	PathParams FetchFieldTypePathParams
	Security   FetchFieldTypeSecurity
}

type FetchFieldTypeResponse struct {
	ContentType                   string
	StatusCode                    int64
	AutopilotV1AssistantFieldType *shared.AutopilotV1AssistantFieldType
}
