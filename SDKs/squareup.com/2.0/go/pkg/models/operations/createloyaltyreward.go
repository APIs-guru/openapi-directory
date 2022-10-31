package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLoyaltyRewardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateLoyaltyRewardRequest struct {
	Request  shared.CreateLoyaltyRewardRequest `request:"mediaType=application/json"`
	Security CreateLoyaltyRewardSecurity
}

type CreateLoyaltyRewardResponse struct {
	ContentType                 string
	CreateLoyaltyRewardResponse *shared.CreateLoyaltyRewardResponse
	StatusCode                  int64
}
