package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCredentialPublicKeyServers = []string{
	"https://accounts.twilio.com",
}

type UpdateCredentialPublicKeyPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateCredentialPublicKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCredentialPublicKeyRequest struct {
	ServerURL  *string
	PathParams UpdateCredentialPublicKeyPathParams
	Request    *UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCredentialPublicKeySecurity
}

type UpdateCredentialPublicKeyResponse struct {
	ContentType                             string
	StatusCode                              int64
	AccountsV1CredentialCredentialPublicKey *shared.AccountsV1CredentialCredentialPublicKey
}
