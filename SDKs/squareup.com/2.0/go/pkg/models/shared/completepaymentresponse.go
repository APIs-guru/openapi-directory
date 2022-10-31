package shared



type CompletePaymentResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Payment *Payment `json:"payment,omitempty"`
    
}

