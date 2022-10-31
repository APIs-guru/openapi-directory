package shared

type CreateInvoiceRequest struct {
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	Invoice        Invoice `json:"invoice"`
}
