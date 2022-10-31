package shared



type ListRefundsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Refunds []Refund `json:"refunds,omitempty"`
    
}

