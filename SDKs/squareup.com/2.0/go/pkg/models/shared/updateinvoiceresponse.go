package shared

type UpdateInvoiceResponse struct {
	Errors  []Error  `json:"errors"`
	Invoice *Invoice `json:"invoice"`
}
