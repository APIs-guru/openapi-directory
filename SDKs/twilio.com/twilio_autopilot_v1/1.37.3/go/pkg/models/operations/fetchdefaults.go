package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDefaultsServerList = []string{
	"https://autopilot.twilio.com",
}

type FetchDefaultsPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type FetchDefaultsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDefaultsRequest struct {
	ServerURL  *string
	PathParams FetchDefaultsPathParams
	Security   FetchDefaultsSecurity
}

type FetchDefaultsResponse struct {
	ContentType                  string
	StatusCode                   int64
	AutopilotV1AssistantDefaults *shared.AutopilotV1AssistantDefaults
}
