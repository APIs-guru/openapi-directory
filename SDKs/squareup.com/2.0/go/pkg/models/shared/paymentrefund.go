package shared



type PaymentRefund struct {
    AmountMoney Money `json:"amount_money"`
    AppFeeMoney *Money `json:"app_fee_money,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    ID string `json:"id"`
    LocationID *string `json:"location_id,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    PaymentID *string `json:"payment_id,omitempty"`
    ProcessingFee []ProcessingFee `json:"processing_fee,omitempty"`
    Reason *string `json:"reason,omitempty"`
    Status *string `json:"status,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

