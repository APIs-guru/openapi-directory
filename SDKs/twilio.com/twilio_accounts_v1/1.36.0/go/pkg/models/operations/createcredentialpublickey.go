package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCredentialPublicKeyServers = []string{
	"https://accounts.twilio.com",
}

type CreateCredentialPublicKeyRequestBodyCreateCredentialPublicKeyRequest struct {
	AccountSid   *string `form:"name=AccountSid"`
	FriendlyName *string `form:"name=FriendlyName"`
	PublicKey    string  `form:"name=PublicKey"`
}

type CreateCredentialPublicKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCredentialPublicKeyRequest struct {
	ServerURL *string
	Request   *CreateCredentialPublicKeyRequestBodyCreateCredentialPublicKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCredentialPublicKeySecurity
}

type CreateCredentialPublicKeyResponse struct {
	ContentType                             string
	StatusCode                              int64
	AccountsV1CredentialCredentialPublicKey *shared.AccountsV1CredentialCredentialPublicKey
}
