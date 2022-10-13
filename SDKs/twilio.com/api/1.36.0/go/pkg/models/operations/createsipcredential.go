package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipCredentialServers = []string{
	"https://api.twilio.com",
}

type CreateSipCredentialPathParams struct {
	AccountSid        string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CredentialListSid string `pathParam:"style=simple,explode=false,name=CredentialListSid"`
}

type CreateSipCredentialRequestBodyCreateSipCredentialRequest struct {
	Password string `form:"name=Password"`
	Username string `form:"name=Username"`
}

type CreateSipCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipCredentialRequest struct {
	ServerURL  *string
	PathParams CreateSipCredentialPathParams
	Request    *CreateSipCredentialRequestBodyCreateSipCredentialRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipCredentialSecurity
}

type CreateSipCredentialResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	APIV2010AccountSipSipCredentialListSipCredential *shared.APIV2010AccountSipSipCredentialListSipCredential
}
