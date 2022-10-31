package shared



type Tender struct {
    AdditionalRecipients []AdditionalRecipient `json:"additional_recipients,omitempty"`
    AmountMoney *Money `json:"amount_money,omitempty"`
    CardDetails *TenderCardDetails `json:"card_details,omitempty"`
    CashDetails *TenderCashDetails `json:"cash_details,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Note *string `json:"note,omitempty"`
    PaymentID *string `json:"payment_id,omitempty"`
    ProcessingFeeMoney *Money `json:"processing_fee_money,omitempty"`
    TipMoney *Money `json:"tip_money,omitempty"`
    TransactionID *string `json:"transaction_id,omitempty"`
    Type string `json:"type"`
    
}

