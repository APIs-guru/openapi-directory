package shared

type Payment struct {
	AmountMoney                    *Money                     `json:"amount_money"`
	AppFeeMoney                    *Money                     `json:"app_fee_money"`
	ApprovedMoney                  *Money                     `json:"approved_money"`
	BankAccountDetails             *BankAccountPaymentDetails `json:"bank_account_details"`
	BillingAddress                 *Address                   `json:"billing_address"`
	BuyerEmailAddress              *string                    `json:"buyer_email_address"`
	Capabilities                   []string                   `json:"capabilities"`
	CardDetails                    *CardPaymentDetails        `json:"card_details"`
	CashDetails                    *CashPaymentDetails        `json:"cash_details"`
	CreatedAt                      *string                    `json:"created_at"`
	CustomerID                     *string                    `json:"customer_id"`
	DelayAction                    *string                    `json:"delay_action"`
	DelayDuration                  *string                    `json:"delay_duration"`
	DelayedUntil                   *string                    `json:"delayed_until"`
	EmployeeID                     *string                    `json:"employee_id"`
	ExternalDetails                *ExternalPaymentDetails    `json:"external_details"`
	ID                             *string                    `json:"id"`
	LocationID                     *string                    `json:"location_id"`
	Note                           *string                    `json:"note"`
	OrderID                        *string                    `json:"order_id"`
	ProcessingFee                  []ProcessingFee            `json:"processing_fee"`
	ReceiptNumber                  *string                    `json:"receipt_number"`
	ReceiptURL                     *string                    `json:"receipt_url"`
	ReferenceID                    *string                    `json:"reference_id"`
	RefundIds                      []string                   `json:"refund_ids"`
	RefundedMoney                  *Money                     `json:"refunded_money"`
	RiskEvaluation                 *RiskEvaluation            `json:"risk_evaluation"`
	ShippingAddress                *Address                   `json:"shipping_address"`
	SourceType                     *string                    `json:"source_type"`
	StatementDescriptionIdentifier *string                    `json:"statement_description_identifier"`
	Status                         *string                    `json:"status"`
	TipMoney                       *Money                     `json:"tip_money"`
	TotalMoney                     *Money                     `json:"total_money"`
	UpdatedAt                      *string                    `json:"updated_at"`
	VersionToken                   *string                    `json:"version_token"`
	WalletDetails                  *DigitalWalletDetails      `json:"wallet_details"`
}
