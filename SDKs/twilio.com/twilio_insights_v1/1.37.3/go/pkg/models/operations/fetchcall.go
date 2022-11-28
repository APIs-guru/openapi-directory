package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCallServerList = []string{
	"https://insights.twilio.com",
}

type FetchCallPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCallRequest struct {
	ServerURL  *string
	PathParams FetchCallPathParams
	Security   FetchCallSecurity
}

type FetchCallResponse struct {
	ContentType    string
	StatusCode     int64
	InsightsV1Call *shared.InsightsV1Call
}
