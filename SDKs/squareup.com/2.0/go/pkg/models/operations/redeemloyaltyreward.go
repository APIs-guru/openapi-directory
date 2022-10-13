package operations

import (
	"openapi/pkg/models/shared"
)

type RedeemLoyaltyRewardPathParams struct {
	RewardID string `pathParam:"style=simple,explode=false,name=reward_id"`
}

type RedeemLoyaltyRewardSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RedeemLoyaltyRewardRequest struct {
	PathParams RedeemLoyaltyRewardPathParams
	Request    shared.RedeemLoyaltyRewardRequest `request:"mediaType=application/json"`
	Security   RedeemLoyaltyRewardSecurity
}

type RedeemLoyaltyRewardResponse struct {
	ContentType                 string
	RedeemLoyaltyRewardResponse *shared.RedeemLoyaltyRewardResponse
	StatusCode                  int64
}
