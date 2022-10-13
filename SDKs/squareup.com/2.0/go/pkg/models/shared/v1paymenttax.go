package shared

type V1PaymentTax struct {
	AppliedMoney  *V1Money `json:"applied_money"`
	Errors        []Error  `json:"errors"`
	FeeID         *string  `json:"fee_id"`
	InclusionType *string  `json:"inclusion_type"`
	Name          *string  `json:"name"`
	Rate          *string  `json:"rate"`
}
