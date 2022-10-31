package shared



type V1SettlementEntry struct {
    AmountMoney *V1Money `json:"amount_money,omitempty"`
    FeeMoney *V1Money `json:"fee_money,omitempty"`
    PaymentID *string `json:"payment_id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

