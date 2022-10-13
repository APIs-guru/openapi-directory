package shared

type OrderMoneyAmounts struct {
	DiscountMoney      *Money `json:"discount_money"`
	ServiceChargeMoney *Money `json:"service_charge_money"`
	TaxMoney           *Money `json:"tax_money"`
	TipMoney           *Money `json:"tip_money"`
	TotalMoney         *Money `json:"total_money"`
}
