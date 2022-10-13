package shared

type CreateInvoiceResponse struct {
	Errors  []Error  `json:"errors"`
	Invoice *Invoice `json:"invoice"`
}
