package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type CreateCredentialAwsCreateCredentialAwsRequest struct {
	AccountSid   *string `form:"name=AccountSid"`
	Credentials  string  `form:"name=Credentials"`
	FriendlyName *string `form:"name=FriendlyName"`
}

type CreateCredentialAwsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCredentialAwsRequest struct {
	ServerURL *string
	Request   *CreateCredentialAwsCreateCredentialAwsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCredentialAwsSecurity
}

type CreateCredentialAwsResponse struct {
	ContentType                       string
	StatusCode                        int64
	AccountsV1CredentialCredentialAws *shared.AccountsV1CredentialCredentialAws
}
