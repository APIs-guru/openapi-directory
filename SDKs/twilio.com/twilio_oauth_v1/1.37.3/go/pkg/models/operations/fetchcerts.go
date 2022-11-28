package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCertsServerList = []string{
	"https://oauth.twilio.com",
}

type FetchCertsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCertsRequest struct {
	ServerURL *string
	Security  FetchCertsSecurity
}

type FetchCertsResponse struct {
	ContentType  string
	StatusCode   int64
	OauthV1Certs *shared.OauthV1Certs
}
