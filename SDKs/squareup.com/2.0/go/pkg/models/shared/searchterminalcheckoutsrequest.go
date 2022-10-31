package shared



type SearchTerminalCheckoutsRequest struct {
    Cursor *string `json:"cursor,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Query *TerminalCheckoutQuery `json:"query,omitempty"`
    
}

