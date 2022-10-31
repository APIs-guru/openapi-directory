package shared



type CreateLoyaltyRewardResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Reward *LoyaltyReward `json:"reward,omitempty"`
    
}

