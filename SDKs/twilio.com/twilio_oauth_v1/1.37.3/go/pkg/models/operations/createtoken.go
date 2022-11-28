package operations

import (
	"openapi/pkg/models/shared"
)

var CreateTokenServerList = []string{
	"https://oauth.twilio.com",
}

type CreateTokenCreateTokenRequest struct {
	ClientSecret *string `form:"name=ClientSecret"`
	ClientSid    string  `form:"name=ClientSid"`
	Code         *string `form:"name=Code"`
	CodeVerifier *string `form:"name=CodeVerifier"`
	DeviceCode   *string `form:"name=DeviceCode"`
	DeviceID     *string `form:"name=DeviceId"`
	GrantType    string  `form:"name=GrantType"`
	RefreshToken *string `form:"name=RefreshToken"`
}

type CreateTokenSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateTokenRequest struct {
	ServerURL *string
	Request   *CreateTokenCreateTokenRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateTokenSecurity
}

type CreateTokenResponse struct {
	ContentType  string
	StatusCode   int64
	OauthV1Token *shared.OauthV1Token
}
