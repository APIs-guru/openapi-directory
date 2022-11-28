package operations

import (
	"openapi/pkg/models/shared"
)

var FetchStyleSheetServerList = []string{
	"https://autopilot.twilio.com",
}

type FetchStyleSheetPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type FetchStyleSheetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchStyleSheetRequest struct {
	ServerURL  *string
	PathParams FetchStyleSheetPathParams
	Security   FetchStyleSheetSecurity
}

type FetchStyleSheetResponse struct {
	ContentType                    string
	StatusCode                     int64
	AutopilotV1AssistantStyleSheet *shared.AutopilotV1AssistantStyleSheet
}
