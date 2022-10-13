package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCompositionServers = []string{
	"https://video.twilio.com",
}

type FetchCompositionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCompositionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCompositionRequest struct {
	ServerURL  *string
	PathParams FetchCompositionPathParams
	Security   FetchCompositionSecurity
}

type FetchCompositionResponse struct {
	ContentType        string
	StatusCode         int64
	VideoV1Composition *shared.VideoV1Composition
}
