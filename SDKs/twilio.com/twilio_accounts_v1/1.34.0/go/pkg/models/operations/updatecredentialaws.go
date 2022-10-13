package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type UpdateCredentialAwsPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCredentialAwsRequestBodyUpdateCredentialAwsRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateCredentialAwsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCredentialAwsRequest struct {
	ServerURL  *string
	PathParams UpdateCredentialAwsPathParams
	Request    *UpdateCredentialAwsRequestBodyUpdateCredentialAwsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCredentialAwsSecurity
}

type UpdateCredentialAwsResponse struct {
	ContentType                       string
	StatusCode                        int64
	AccountsV1CredentialCredentialAws *shared.AccountsV1CredentialCredentialAws
}
