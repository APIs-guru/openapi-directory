package operations

import (
	"openapi/pkg/models/shared"
)

type SearchLoyaltyRewardsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SearchLoyaltyRewardsRequest struct {
	Request  shared.SearchLoyaltyRewardsRequest `request:"mediaType=application/json"`
	Security SearchLoyaltyRewardsSecurity
}

type SearchLoyaltyRewardsResponse struct {
	ContentType                  string
	SearchLoyaltyRewardsResponse *shared.SearchLoyaltyRewardsResponse
	StatusCode                   int64
}
