package shared

type RetrieveLoyaltyRewardResponse struct {
	Errors []Error        `json:"errors"`
	Reward *LoyaltyReward `json:"reward"`
}
