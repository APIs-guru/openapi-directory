package shared

type SearchTerminalCheckoutsResponse struct {
	Checkouts []TerminalCheckout `json:"checkouts"`
	Cursor    *string            `json:"cursor"`
	Errors    []Error            `json:"errors"`
}
