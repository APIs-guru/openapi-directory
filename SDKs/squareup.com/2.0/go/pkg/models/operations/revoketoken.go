package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeTokenSecurity struct {
	Oauth2ClientSecret shared.SchemeOauth2ClientSecret `security:"scheme,type=apiKey,subtype=header"`
}

type RevokeTokenRequest struct {
	Request  shared.RevokeTokenRequest `request:"mediaType=application/json"`
	Security RevokeTokenSecurity
}

type RevokeTokenResponse struct {
	ContentType         string
	RevokeTokenResponse *shared.RevokeTokenResponse
	StatusCode          int64
}
