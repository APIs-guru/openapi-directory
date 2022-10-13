package shared

type V1Tender struct {
	CardBrand       *string  `json:"card_brand"`
	ChangeBackMoney *V1Money `json:"change_back_money"`
	EmployeeID      *string  `json:"employee_id"`
	EntryMethod     *string  `json:"entry_method"`
	ID              *string  `json:"id"`
	IsExchange      *bool    `json:"is_exchange"`
	Name            *string  `json:"name"`
	PanSuffix       *string  `json:"pan_suffix"`
	PaymentNote     *string  `json:"payment_note"`
	ReceiptURL      *string  `json:"receipt_url"`
	RefundedMoney   *V1Money `json:"refunded_money"`
	SettledAt       *string  `json:"settled_at"`
	TenderedAt      *string  `json:"tendered_at"`
	TenderedMoney   *V1Money `json:"tendered_money"`
	TotalMoney      *V1Money `json:"total_money"`
	Type            *string  `json:"type"`
}
