package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteNetworkAccessProfileNetworkServers = []string{
	"https://supersim.twilio.com",
}

type DeleteNetworkAccessProfileNetworkPathParams struct {
	NetworkAccessProfileSid string `pathParam:"style=simple,explode=false,name=NetworkAccessProfileSid"`
	Sid                     string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteNetworkAccessProfileNetworkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteNetworkAccessProfileNetworkRequest struct {
	ServerURL  *string
	PathParams DeleteNetworkAccessProfileNetworkPathParams
	Security   DeleteNetworkAccessProfileNetworkSecurity
}

type DeleteNetworkAccessProfileNetworkResponse struct {
	ContentType string
	StatusCode  int64
}
