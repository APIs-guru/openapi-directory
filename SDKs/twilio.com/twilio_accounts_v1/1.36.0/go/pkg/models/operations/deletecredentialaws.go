package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCredentialAwsServers = []string{
	"https://accounts.twilio.com",
}

type DeleteCredentialAwsPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCredentialAwsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCredentialAwsRequest struct {
	ServerURL  *string
	PathParams DeleteCredentialAwsPathParams
	Security   DeleteCredentialAwsSecurity
}

type DeleteCredentialAwsResponse struct {
	ContentType string
	StatusCode  int64
}
