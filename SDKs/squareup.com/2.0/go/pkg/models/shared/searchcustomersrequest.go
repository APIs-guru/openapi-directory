package shared



type SearchCustomersRequest struct {
    Cursor *string `json:"cursor,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Query *CustomerQuery `json:"query,omitempty"`
    
}

