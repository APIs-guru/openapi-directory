package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCredentialPublicKeyServerList = []string{
	"https://accounts.twilio.com",
}

type FetchCredentialPublicKeyPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCredentialPublicKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCredentialPublicKeyRequest struct {
	ServerURL  *string
	PathParams FetchCredentialPublicKeyPathParams
	Security   FetchCredentialPublicKeySecurity
}

type FetchCredentialPublicKeyResponse struct {
	ContentType                             string
	StatusCode                              int64
	AccountsV1CredentialCredentialPublicKey *shared.AccountsV1CredentialCredentialPublicKey
}
