package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSecondaryAuthTokenServers = []string{
	"https://accounts.twilio.com",
}

type CreateSecondaryAuthTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSecondaryAuthTokenRequest struct {
	ServerURL *string
	Security  CreateSecondaryAuthTokenSecurity
}

type CreateSecondaryAuthTokenResponse struct {
	ContentType                  string
	StatusCode                   int64
	AccountsV1SecondaryAuthToken *shared.AccountsV1SecondaryAuthToken
}
