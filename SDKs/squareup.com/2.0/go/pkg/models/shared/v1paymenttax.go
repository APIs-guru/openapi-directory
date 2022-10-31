package shared



type V1PaymentTax struct {
    AppliedMoney *V1Money `json:"applied_money,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    FeeID *string `json:"fee_id,omitempty"`
    InclusionType *string `json:"inclusion_type,omitempty"`
    Name *string `json:"name,omitempty"`
    Rate *string `json:"rate,omitempty"`
    
}

