package shared



type GetPaymentRefundResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Refund *PaymentRefund `json:"refund,omitempty"`
    
}

