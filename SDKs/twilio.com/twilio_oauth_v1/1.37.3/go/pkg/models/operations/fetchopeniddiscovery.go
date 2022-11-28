package operations

import (
	"openapi/pkg/models/shared"
)

var FetchOpenidDiscoveryServerList = []string{
	"https://oauth.twilio.com",
}

type FetchOpenidDiscoverySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchOpenidDiscoveryRequest struct {
	ServerURL *string
	Security  FetchOpenidDiscoverySecurity
}

type FetchOpenidDiscoveryResponse struct {
	ContentType            string
	StatusCode             int64
	OauthV1OpenidDiscovery *shared.OauthV1OpenidDiscovery
}
