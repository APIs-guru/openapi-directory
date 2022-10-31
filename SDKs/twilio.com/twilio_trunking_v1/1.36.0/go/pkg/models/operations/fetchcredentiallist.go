package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCredentialListServers = []string{
	"https://trunking.twilio.com",
}

type FetchCredentialListPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type FetchCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCredentialListRequest struct {
	ServerURL  *string
	PathParams FetchCredentialListPathParams
	Security   FetchCredentialListSecurity
}

type FetchCredentialListResponse struct {
	ContentType                   string
	StatusCode                    int64
	TrunkingV1TrunkCredentialList *shared.TrunkingV1TrunkCredentialList
}
