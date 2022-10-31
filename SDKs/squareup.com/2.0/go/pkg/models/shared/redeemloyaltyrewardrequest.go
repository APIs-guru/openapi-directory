package shared

type RedeemLoyaltyRewardRequest struct {
	IdempotencyKey string `json:"idempotency_key"`
	LocationID     string `json:"location_id"`
}
