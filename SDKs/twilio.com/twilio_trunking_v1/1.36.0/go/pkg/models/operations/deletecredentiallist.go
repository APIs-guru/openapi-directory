package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCredentialListServers = []string{
	"https://trunking.twilio.com",
}

type DeleteCredentialListPathParams struct {
	Sid      string `pathParam:"style=simple,explode=false,name=Sid"`
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type DeleteCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCredentialListRequest struct {
	ServerURL  *string
	PathParams DeleteCredentialListPathParams
	Security   DeleteCredentialListSecurity
}

type DeleteCredentialListResponse struct {
	ContentType string
	StatusCode  int64
}
