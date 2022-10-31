package shared



type RefundDetails struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    ItemPrice *float64 `json:"itemPrice,omitempty"`
    RefundAmount *float64 `json:"refundAmount,omitempty"`
    RefundPercentage *float64 `json:"refundPercentage,omitempty"`
    
}

