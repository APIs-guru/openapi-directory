package shared

type CreateShiftRequest struct {
	IdempotencyKey *string `json:"idempotency_key"`
	Shift          Shift   `json:"shift"`
}
