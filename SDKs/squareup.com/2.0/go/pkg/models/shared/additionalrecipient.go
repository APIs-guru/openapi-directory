package shared

type AdditionalRecipient struct {
	AmountMoney  Money   `json:"amount_money"`
	Description  *string `json:"description"`
	LocationID   string  `json:"location_id"`
	ReceivableID *string `json:"receivable_id"`
}
