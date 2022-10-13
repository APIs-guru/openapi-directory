package shared

type SearchTerminalRefundsResponse struct {
	Cursor  *string          `json:"cursor"`
	Errors  []Error          `json:"errors"`
	Refunds []TerminalRefund `json:"refunds"`
}
