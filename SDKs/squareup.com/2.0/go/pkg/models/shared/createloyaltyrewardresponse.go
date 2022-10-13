package shared

type CreateLoyaltyRewardResponse struct {
	Errors []Error        `json:"errors"`
	Reward *LoyaltyReward `json:"reward"`
}
