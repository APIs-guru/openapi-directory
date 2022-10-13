package shared

type SearchTerminalRefundsRequest struct {
	Cursor *string              `json:"cursor"`
	Limit  *int64               `json:"limit"`
	Query  *TerminalRefundQuery `json:"query"`
}
