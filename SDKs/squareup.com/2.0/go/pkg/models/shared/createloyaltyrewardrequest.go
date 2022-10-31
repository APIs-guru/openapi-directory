package shared



type CreateLoyaltyRewardRequest struct {
    IdempotencyKey string `json:"idempotency_key"`
    Reward LoyaltyReward `json:"reward"`
    
}

