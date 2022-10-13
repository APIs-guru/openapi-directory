package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEsimProfileServers = []string{
	"https://supersim.twilio.com",
}

type FetchEsimProfilePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchEsimProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEsimProfileRequest struct {
	ServerURL  *string
	PathParams FetchEsimProfilePathParams
	Security   FetchEsimProfileSecurity
}

type FetchEsimProfileResponse struct {
	ContentType           string
	StatusCode            int64
	SupersimV1EsimProfile *shared.SupersimV1EsimProfile
}
