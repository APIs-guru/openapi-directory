package operations

import (
	"openapi/pkg/models/shared"
)

var FetchQueryServerList = []string{
	"https://autopilot.twilio.com",
}

type FetchQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchQueryRequest struct {
	ServerURL  *string
	PathParams FetchQueryPathParams
	Security   FetchQuerySecurity
}

type FetchQueryResponse struct {
	ContentType               string
	StatusCode                int64
	AutopilotV1AssistantQuery *shared.AutopilotV1AssistantQuery
}
