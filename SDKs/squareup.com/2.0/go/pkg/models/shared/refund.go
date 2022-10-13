package shared

type Refund struct {
	AdditionalRecipients []AdditionalRecipient `json:"additional_recipients"`
	AmountMoney          Money                 `json:"amount_money"`
	CreatedAt            *string               `json:"created_at"`
	ID                   string                `json:"id"`
	LocationID           string                `json:"location_id"`
	ProcessingFeeMoney   *Money                `json:"processing_fee_money"`
	Reason               string                `json:"reason"`
	Status               string                `json:"status"`
	TenderID             string                `json:"tender_id"`
	TransactionID        string                `json:"transaction_id"`
}
