package shared



type ListTransactionsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Transactions []Transaction `json:"transactions,omitempty"`
    
}

