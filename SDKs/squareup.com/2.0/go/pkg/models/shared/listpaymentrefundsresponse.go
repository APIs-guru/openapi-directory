package shared



type ListPaymentRefundsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Refunds []PaymentRefund `json:"refunds,omitempty"`
    
}

