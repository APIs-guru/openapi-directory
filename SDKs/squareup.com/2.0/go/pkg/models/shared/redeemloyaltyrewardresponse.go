package shared



type RedeemLoyaltyRewardResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Event *LoyaltyEvent `json:"event,omitempty"`
    
}

