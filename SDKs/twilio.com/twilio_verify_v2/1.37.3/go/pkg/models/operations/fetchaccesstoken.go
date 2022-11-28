package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAccessTokenServerList = []string{
	"https://verify.twilio.com",
}

type FetchAccessTokenPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchAccessTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAccessTokenRequest struct {
	ServerURL  *string
	PathParams FetchAccessTokenPathParams
	Security   FetchAccessTokenSecurity
}

type FetchAccessTokenResponse struct {
	ContentType                string
	StatusCode                 int64
	VerifyV2ServiceAccessToken *shared.VerifyV2ServiceAccessToken
}
