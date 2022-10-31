package shared



type SearchTerminalRefundsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Refunds []TerminalRefund `json:"refunds,omitempty"`
    
}

