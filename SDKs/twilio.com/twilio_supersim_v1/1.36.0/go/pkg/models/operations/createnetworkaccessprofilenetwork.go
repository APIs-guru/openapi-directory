package operations

import (
	"openapi/pkg/models/shared"
)

var CreateNetworkAccessProfileNetworkServers = []string{
	"https://supersim.twilio.com",
}

type CreateNetworkAccessProfileNetworkPathParams struct {
	NetworkAccessProfileSid string `pathParam:"style=simple,explode=false,name=NetworkAccessProfileSid"`
}

type CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest struct {
	Network string `form:"name=Network"`
}

type CreateNetworkAccessProfileNetworkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateNetworkAccessProfileNetworkRequest struct {
	ServerURL  *string
	PathParams CreateNetworkAccessProfileNetworkPathParams
	Request    *CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateNetworkAccessProfileNetworkSecurity
}

type CreateNetworkAccessProfileNetworkResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork *shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork
}
