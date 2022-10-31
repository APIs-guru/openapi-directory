package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMobileAuthorizationCodeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateMobileAuthorizationCodeRequest struct {
	Request  shared.CreateMobileAuthorizationCodeRequest `request:"mediaType=application/json"`
	Security CreateMobileAuthorizationCodeSecurity
}

type CreateMobileAuthorizationCodeResponse struct {
	ContentType                           string
	CreateMobileAuthorizationCodeResponse *shared.CreateMobileAuthorizationCodeResponse
	StatusCode                            int64
}
