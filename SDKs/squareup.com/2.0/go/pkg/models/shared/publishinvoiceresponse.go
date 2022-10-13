package shared

type PublishInvoiceResponse struct {
	Errors  []Error  `json:"errors"`
	Invoice *Invoice `json:"invoice"`
}
