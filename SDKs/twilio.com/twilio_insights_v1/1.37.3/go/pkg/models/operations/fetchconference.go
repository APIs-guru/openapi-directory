package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConferenceServerList = []string{
	"https://insights.twilio.com",
}

type FetchConferencePathParams struct {
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type FetchConferenceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConferenceRequest struct {
	ServerURL  *string
	PathParams FetchConferencePathParams
	Security   FetchConferenceSecurity
}

type FetchConferenceResponse struct {
	ContentType          string
	StatusCode           int64
	InsightsV1Conference *shared.InsightsV1Conference
}
