package shared

type PublishInvoiceRequest struct {
	IdempotencyKey *string `json:"idempotency_key"`
	Version        int64   `json:"version"`
}
