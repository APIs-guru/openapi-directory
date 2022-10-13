package shared

type GiftCard struct {
	BalanceMoney *Money       `json:"balance_money"`
	CreatedAt    *string      `json:"created_at"`
	CustomerIds  []string     `json:"customer_ids"`
	Gan          *string      `json:"gan"`
	GanSource    *interface{} `json:"gan_source"`
	ID           *string      `json:"id"`
	State        *interface{} `json:"state"`
	Type         interface{}  `json:"type"`
}
