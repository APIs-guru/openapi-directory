package shared

type CreateInvoiceRequest struct {
	IdempotencyKey *string `json:"idempotency_key"`
	Invoice        Invoice `json:"invoice"`
}
