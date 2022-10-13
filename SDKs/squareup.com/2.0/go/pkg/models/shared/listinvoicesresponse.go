package shared

type ListInvoicesResponse struct {
	Cursor   *string   `json:"cursor"`
	Errors   []Error   `json:"errors"`
	Invoices []Invoice `json:"invoices"`
}
