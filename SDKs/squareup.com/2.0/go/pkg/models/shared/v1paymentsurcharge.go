package shared



type V1PaymentSurcharge struct {
    AmountMoney *V1Money `json:"amount_money,omitempty"`
    AppliedMoney *V1Money `json:"applied_money,omitempty"`
    Name *string `json:"name,omitempty"`
    Rate *string `json:"rate,omitempty"`
    SurchargeID *string `json:"surcharge_id,omitempty"`
    Taxable *bool `json:"taxable,omitempty"`
    Taxes []V1PaymentTax `json:"taxes,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

