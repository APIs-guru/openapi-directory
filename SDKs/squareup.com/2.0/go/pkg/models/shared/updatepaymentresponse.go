package shared



type UpdatePaymentResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Payment *Payment `json:"payment,omitempty"`
    
}

