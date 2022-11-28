package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAccessTokenServerList = []string{
	"https://verify.twilio.com",
}

type CreateAccessTokenPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateAccessTokenCreateAccessTokenRequest struct {
	FactorFriendlyName *string                               `form:"name=FactorFriendlyName"`
	FactorType         shared.AccessTokenEnumFactorTypesEnum `form:"name=FactorType"`
	Identity           string                                `form:"name=Identity"`
	TTL                *int64                                `form:"name=Ttl"`
}

type CreateAccessTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAccessTokenRequest struct {
	ServerURL  *string
	PathParams CreateAccessTokenPathParams
	Request    *CreateAccessTokenCreateAccessTokenRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateAccessTokenSecurity
}

type CreateAccessTokenResponse struct {
	ContentType                string
	StatusCode                 int64
	VerifyV2ServiceAccessToken *shared.VerifyV2ServiceAccessToken
}
