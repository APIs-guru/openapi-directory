package shared

type GiftCard struct {
	BalanceMoney *Money       `json:"balance_money,omitempty"`
	CreatedAt    *string      `json:"created_at,omitempty"`
	CustomerIds  []string     `json:"customer_ids,omitempty"`
	Gan          *string      `json:"gan,omitempty"`
	GanSource    *interface{} `json:"gan_source,omitempty"`
	ID           *string      `json:"id,omitempty"`
	State        *interface{} `json:"state,omitempty"`
	Type         interface{}  `json:"type"`
}
