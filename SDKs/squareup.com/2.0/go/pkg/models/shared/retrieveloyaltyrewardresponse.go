package shared



type RetrieveLoyaltyRewardResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Reward *LoyaltyReward `json:"reward,omitempty"`
    
}

