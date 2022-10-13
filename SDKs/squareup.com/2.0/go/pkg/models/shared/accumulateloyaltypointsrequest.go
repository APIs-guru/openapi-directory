package shared

type AccumulateLoyaltyPointsRequest struct {
	AccumulatePoints LoyaltyEventAccumulatePoints `json:"accumulate_points"`
	IdempotencyKey   string                       `json:"idempotency_key"`
	LocationID       string                       `json:"location_id"`
}
