package shared

type SearchInvoicesResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
	Invoices []Invoice `json:"invoices,omitempty"`
}
