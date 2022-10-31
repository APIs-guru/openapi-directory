package shared



type AccumulateLoyaltyPointsResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Event *LoyaltyEvent `json:"event,omitempty"`
    
}

