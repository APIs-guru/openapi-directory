package shared



type SearchLoyaltyRewardsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Rewards []LoyaltyReward `json:"rewards,omitempty"`
    
}

