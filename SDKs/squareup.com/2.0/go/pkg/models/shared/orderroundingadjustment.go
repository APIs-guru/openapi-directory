package shared

type OrderRoundingAdjustment struct {
	AmountMoney *Money  `json:"amount_money"`
	Name        *string `json:"name"`
	UID         *string `json:"uid"`
}
