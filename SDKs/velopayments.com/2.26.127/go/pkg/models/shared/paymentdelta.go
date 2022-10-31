package shared



type PaymentDelta struct {
    PaymentAmount *int64 `json:"paymentAmount,omitempty"`
    PaymentCurrency *string `json:"paymentCurrency,omitempty"`
    PaymentID string `json:"paymentId"`
    PayorPaymentID *string `json:"payorPaymentId,omitempty"`
    PayoutID string `json:"payoutId"`
    SourceAmount *int64 `json:"sourceAmount,omitempty"`
    SourceCurrency *string `json:"sourceCurrency,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

