package operations

import (
	"openapi/pkg/models/shared"
)

var FetchNetworkAccessProfileNetworkServers = []string{
	"https://supersim.twilio.com",
}

type FetchNetworkAccessProfileNetworkPathParams struct {
	NetworkAccessProfileSid string `pathParam:"style=simple,explode=false,name=NetworkAccessProfileSid"`
	Sid                     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchNetworkAccessProfileNetworkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchNetworkAccessProfileNetworkRequest struct {
	ServerURL  *string
	PathParams FetchNetworkAccessProfileNetworkPathParams
	Security   FetchNetworkAccessProfileNetworkSecurity
}

type FetchNetworkAccessProfileNetworkResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork *shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork
}
