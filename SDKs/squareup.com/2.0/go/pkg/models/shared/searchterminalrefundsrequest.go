package shared

type SearchTerminalRefundsRequest struct {
	Cursor *string              `json:"cursor,omitempty"`
	Limit  *int64               `json:"limit,omitempty"`
	Query  *TerminalRefundQuery `json:"query,omitempty"`
}
