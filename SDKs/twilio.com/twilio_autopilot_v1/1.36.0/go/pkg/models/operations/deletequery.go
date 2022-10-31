package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteQueryServers = []string{
	"https://autopilot.twilio.com",
}

type DeleteQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteQueryRequest struct {
	ServerURL  *string
	PathParams DeleteQueryPathParams
	Security   DeleteQuerySecurity
}

type DeleteQueryResponse struct {
	ContentType string
	StatusCode  int64
}
