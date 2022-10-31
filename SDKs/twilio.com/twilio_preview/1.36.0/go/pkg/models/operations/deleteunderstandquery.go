package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUnderstandQueryServers = []string{
	"https://preview.twilio.com",
}

type DeleteUnderstandQueryPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUnderstandQuerySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUnderstandQueryRequest struct {
	ServerURL  *string
	PathParams DeleteUnderstandQueryPathParams
	Security   DeleteUnderstandQuerySecurity
}

type DeleteUnderstandQueryResponse struct {
	ContentType string
	StatusCode  int64
}
