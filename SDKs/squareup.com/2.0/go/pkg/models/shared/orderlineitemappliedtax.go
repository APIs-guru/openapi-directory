package shared

type OrderLineItemAppliedTax struct {
	AppliedMoney *Money  `json:"applied_money"`
	TaxUID       string  `json:"tax_uid"`
	UID          *string `json:"uid"`
}
