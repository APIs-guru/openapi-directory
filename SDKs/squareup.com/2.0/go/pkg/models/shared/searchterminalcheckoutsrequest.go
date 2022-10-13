package shared

type SearchTerminalCheckoutsRequest struct {
	Cursor *string                `json:"cursor"`
	Limit  *int64                 `json:"limit"`
	Query  *TerminalCheckoutQuery `json:"query"`
}
