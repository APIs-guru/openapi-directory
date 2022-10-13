package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoyaltyAccountSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateLoyaltyAccountRequest struct {
	Request  shared.CreateLoyaltyAccountRequest `request:"mediaType=application/json"`
	Security CreateLoyaltyAccountSecurity
}

type CreateLoyaltyAccountResponse struct {
	ContentType                  string
	CreateLoyaltyAccountResponse *shared.CreateLoyaltyAccountResponse
	StatusCode                   int64
}
