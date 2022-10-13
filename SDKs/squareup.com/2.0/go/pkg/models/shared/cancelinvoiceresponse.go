package shared

type CancelInvoiceResponse struct {
	Errors  []Error  `json:"errors"`
	Invoice *Invoice `json:"invoice"`
}
