package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipCredentialServers = []string{
	"https://api.twilio.com",
}

type DeleteSipCredentialPathParams struct {
	AccountSid        string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CredentialListSid string `pathParam:"style=simple,explode=false,name=CredentialListSid"`
	Sid               string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipCredentialRequest struct {
	ServerURL  *string
	PathParams DeleteSipCredentialPathParams
	Security   DeleteSipCredentialSecurity
}

type DeleteSipCredentialResponse struct {
	ContentType string
	StatusCode  int64
}
