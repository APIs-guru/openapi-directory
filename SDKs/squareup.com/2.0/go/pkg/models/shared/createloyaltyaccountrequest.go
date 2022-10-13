package shared

type CreateLoyaltyAccountRequest struct {
	IdempotencyKey string         `json:"idempotency_key"`
	LoyaltyAccount LoyaltyAccount `json:"loyalty_account"`
}
