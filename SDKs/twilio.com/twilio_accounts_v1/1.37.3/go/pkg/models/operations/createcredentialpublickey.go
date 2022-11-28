package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCredentialPublicKeyServerList = []string{
	"https://accounts.twilio.com",
}

type CreateCredentialPublicKeyCreateCredentialPublicKeyRequest struct {
	AccountSid   *string `form:"name=AccountSid"`
	FriendlyName *string `form:"name=FriendlyName"`
	PublicKey    string  `form:"name=PublicKey"`
}

type CreateCredentialPublicKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCredentialPublicKeyRequest struct {
	ServerURL *string
	Request   *CreateCredentialPublicKeyCreateCredentialPublicKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCredentialPublicKeySecurity
}

type CreateCredentialPublicKeyResponse struct {
	ContentType                             string
	StatusCode                              int64
	AccountsV1CredentialCredentialPublicKey *shared.AccountsV1CredentialCredentialPublicKey
}
