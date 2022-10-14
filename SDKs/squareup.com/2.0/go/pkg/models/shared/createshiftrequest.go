package shared

type CreateShiftRequest struct {
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	Shift          Shift   `json:"shift"`
}
