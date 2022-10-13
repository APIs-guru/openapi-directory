package shared

type Tender struct {
	AdditionalRecipients []AdditionalRecipient `json:"additional_recipients"`
	AmountMoney          *Money                `json:"amount_money"`
	CardDetails          *TenderCardDetails    `json:"card_details"`
	CashDetails          *TenderCashDetails    `json:"cash_details"`
	CreatedAt            *string               `json:"created_at"`
	CustomerID           *string               `json:"customer_id"`
	ID                   *string               `json:"id"`
	LocationID           *string               `json:"location_id"`
	Note                 *string               `json:"note"`
	PaymentID            *string               `json:"payment_id"`
	ProcessingFeeMoney   *Money                `json:"processing_fee_money"`
	TipMoney             *Money                `json:"tip_money"`
	TransactionID        *string               `json:"transaction_id"`
	Type                 string                `json:"type"`
}
