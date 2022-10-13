package shared

type SearchInvoicesRequest struct {
	Cursor *string      `json:"cursor"`
	Limit  *int64       `json:"limit"`
	Query  InvoiceQuery `json:"query"`
}
