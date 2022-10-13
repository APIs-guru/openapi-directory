package shared

type AdjustLoyaltyPointsRequest struct {
	AdjustPoints   LoyaltyEventAdjustPoints `json:"adjust_points"`
	IdempotencyKey string                   `json:"idempotency_key"`
}
