package shared



type GetPaymentResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Payment *Payment `json:"payment,omitempty"`
    
}

