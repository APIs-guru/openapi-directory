package shared



type CancelPaymentResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Payment *Payment `json:"payment,omitempty"`
    
}

