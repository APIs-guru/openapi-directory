package shared

type OrderMoneyAmounts struct {
	DiscountMoney      *Money `json:"discount_money,omitempty"`
	ServiceChargeMoney *Money `json:"service_charge_money,omitempty"`
	TaxMoney           *Money `json:"tax_money,omitempty"`
	TipMoney           *Money `json:"tip_money,omitempty"`
	TotalMoney         *Money `json:"total_money,omitempty"`
}
