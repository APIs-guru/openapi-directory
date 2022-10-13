package operations

import (
	"openapi/pkg/models/shared"
)

var CreateNetworkAccessProfileServers = []string{
	"https://supersim.twilio.com",
}

type CreateNetworkAccessProfileRequestBodyCreateNetworkAccessProfileRequest struct {
	Networks   []string `form:"name=Networks"`
	UniqueName *string  `form:"name=UniqueName"`
}

type CreateNetworkAccessProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateNetworkAccessProfileRequest struct {
	ServerURL *string
	Request   *CreateNetworkAccessProfileRequestBodyCreateNetworkAccessProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateNetworkAccessProfileSecurity
}

type CreateNetworkAccessProfileResponse struct {
	ContentType                    string
	StatusCode                     int64
	SupersimV1NetworkAccessProfile *shared.SupersimV1NetworkAccessProfile
}
