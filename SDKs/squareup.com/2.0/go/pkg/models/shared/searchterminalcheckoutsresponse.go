package shared



type SearchTerminalCheckoutsResponse struct {
    Checkouts []TerminalCheckout `json:"checkouts,omitempty"`
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

