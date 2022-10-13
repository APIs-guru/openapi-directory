package shared

type SearchLoyaltyRewardsResponse struct {
	Cursor  *string         `json:"cursor"`
	Errors  []Error         `json:"errors"`
	Rewards []LoyaltyReward `json:"rewards"`
}
