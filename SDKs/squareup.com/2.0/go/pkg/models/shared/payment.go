package shared



type Payment struct {
    AmountMoney *Money `json:"amount_money,omitempty"`
    AppFeeMoney *Money `json:"app_fee_money,omitempty"`
    ApprovedMoney *Money `json:"approved_money,omitempty"`
    BankAccountDetails *BankAccountPaymentDetails `json:"bank_account_details,omitempty"`
    BillingAddress *Address `json:"billing_address,omitempty"`
    BuyerEmailAddress *string `json:"buyer_email_address,omitempty"`
    Capabilities []string `json:"capabilities,omitempty"`
    CardDetails *CardPaymentDetails `json:"card_details,omitempty"`
    CashDetails *CashPaymentDetails `json:"cash_details,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CustomerID *string `json:"customer_id,omitempty"`
    DelayAction *string `json:"delay_action,omitempty"`
    DelayDuration *string `json:"delay_duration,omitempty"`
    DelayedUntil *string `json:"delayed_until,omitempty"`
    EmployeeID *string `json:"employee_id,omitempty"`
    ExternalDetails *ExternalPaymentDetails `json:"external_details,omitempty"`
    ID *string `json:"id,omitempty"`
    LocationID *string `json:"location_id,omitempty"`
    Note *string `json:"note,omitempty"`
    OrderID *string `json:"order_id,omitempty"`
    ProcessingFee []ProcessingFee `json:"processing_fee,omitempty"`
    ReceiptNumber *string `json:"receipt_number,omitempty"`
    ReceiptURL *string `json:"receipt_url,omitempty"`
    ReferenceID *string `json:"reference_id,omitempty"`
    RefundIds []string `json:"refund_ids,omitempty"`
    RefundedMoney *Money `json:"refunded_money,omitempty"`
    RiskEvaluation *RiskEvaluation `json:"risk_evaluation,omitempty"`
    ShippingAddress *Address `json:"shipping_address,omitempty"`
    SourceType *string `json:"source_type,omitempty"`
    StatementDescriptionIdentifier *string `json:"statement_description_identifier,omitempty"`
    Status *string `json:"status,omitempty"`
    TipMoney *Money `json:"tip_money,omitempty"`
    TotalMoney *Money `json:"total_money,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    VersionToken *string `json:"version_token,omitempty"`
    WalletDetails *DigitalWalletDetails `json:"wallet_details,omitempty"`
    
}

