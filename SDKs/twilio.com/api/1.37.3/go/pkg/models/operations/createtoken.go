package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTokenServerList = []string{
	"https://api.twilio.com",
}

type CreateTokenPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateTokenCreateTokenRequest struct {
	TTL *int64 `form:"name=Ttl"`
}

type CreateTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTokenRequest struct {
	ServerURL  *string
	PathParams CreateTokenPathParams
	Request    *CreateTokenCreateTokenRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateTokenSecurity
}

type CreateTokenResponse struct {
	ContentType          string
	StatusCode           int64
	APIV2010AccountToken *shared.APIV2010AccountToken
}
