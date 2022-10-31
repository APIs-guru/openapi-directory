package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPlayerStreamerPlaybackGrantServers = []string{
	"https://media.twilio.com",
}

type FetchPlayerStreamerPlaybackGrantPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchPlayerStreamerPlaybackGrantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPlayerStreamerPlaybackGrantRequest struct {
	ServerURL  *string
	PathParams FetchPlayerStreamerPlaybackGrantPathParams
	Security   FetchPlayerStreamerPlaybackGrantSecurity
}

type FetchPlayerStreamerPlaybackGrantResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	MediaV1PlayerStreamerPlayerStreamerPlaybackGrant *shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant
}
