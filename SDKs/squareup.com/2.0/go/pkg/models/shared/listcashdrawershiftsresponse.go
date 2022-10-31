package shared



type ListCashDrawerShiftsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Items []CashDrawerShiftSummary `json:"items,omitempty"`
    
}

