package shared



type RefundPaymentResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *PaymentRefund `json:"refund,omitempty"`
    
}

