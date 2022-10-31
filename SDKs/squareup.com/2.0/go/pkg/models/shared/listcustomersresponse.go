package shared



type ListCustomersResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Customers []Customer `json:"customers,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

