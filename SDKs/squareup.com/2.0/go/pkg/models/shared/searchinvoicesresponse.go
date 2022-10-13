package shared

type SearchInvoicesResponse struct {
	Cursor   *string   `json:"cursor"`
	Errors   []Error   `json:"errors"`
	Invoices []Invoice `json:"invoices"`
}
