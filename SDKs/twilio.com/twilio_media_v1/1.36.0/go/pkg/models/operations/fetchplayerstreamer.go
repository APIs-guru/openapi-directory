package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPlayerStreamerServers = []string{
	"https://media.twilio.com",
}

type FetchPlayerStreamerPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchPlayerStreamerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPlayerStreamerRequest struct {
	ServerURL  *string
	PathParams FetchPlayerStreamerPathParams
	Security   FetchPlayerStreamerSecurity
}

type FetchPlayerStreamerResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1PlayerStreamer *shared.MediaV1PlayerStreamer
}
