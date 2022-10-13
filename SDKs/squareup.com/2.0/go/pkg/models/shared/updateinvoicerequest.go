package shared

type UpdateInvoiceRequest struct {
	FieldsToClear  []string `json:"fields_to_clear"`
	IdempotencyKey *string  `json:"idempotency_key"`
	Invoice        Invoice  `json:"invoice"`
}
