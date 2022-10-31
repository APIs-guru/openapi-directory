package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLoyaltyRewardPathParams struct {
	RewardID string `pathParam:"style=simple,explode=false,name=reward_id"`
}

type DeleteLoyaltyRewardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteLoyaltyRewardRequest struct {
	PathParams DeleteLoyaltyRewardPathParams
	Security   DeleteLoyaltyRewardSecurity
}

type DeleteLoyaltyRewardResponse struct {
	ContentType                 string
	DeleteLoyaltyRewardResponse *shared.DeleteLoyaltyRewardResponse
	StatusCode                  int64
}
