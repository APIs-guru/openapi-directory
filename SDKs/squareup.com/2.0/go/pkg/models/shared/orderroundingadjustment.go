package shared

type OrderRoundingAdjustment struct {
	AmountMoney *Money  `json:"amount_money,omitempty"`
	Name        *string `json:"name,omitempty"`
	UID         *string `json:"uid,omitempty"`
}
