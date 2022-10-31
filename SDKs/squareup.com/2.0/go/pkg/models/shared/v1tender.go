package shared

type V1Tender struct {
	CardBrand       *string  `json:"card_brand,omitempty"`
	ChangeBackMoney *V1Money `json:"change_back_money,omitempty"`
	EmployeeID      *string  `json:"employee_id,omitempty"`
	EntryMethod     *string  `json:"entry_method,omitempty"`
	ID              *string  `json:"id,omitempty"`
	IsExchange      *bool    `json:"is_exchange,omitempty"`
	Name            *string  `json:"name,omitempty"`
	PanSuffix       *string  `json:"pan_suffix,omitempty"`
	PaymentNote     *string  `json:"payment_note,omitempty"`
	ReceiptURL      *string  `json:"receipt_url,omitempty"`
	RefundedMoney   *V1Money `json:"refunded_money,omitempty"`
	SettledAt       *string  `json:"settled_at,omitempty"`
	TenderedAt      *string  `json:"tendered_at,omitempty"`
	TenderedMoney   *V1Money `json:"tendered_money,omitempty"`
	TotalMoney      *V1Money `json:"total_money,omitempty"`
	Type            *string  `json:"type,omitempty"`
}
