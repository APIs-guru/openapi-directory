package shared

type V1PaymentSurcharge struct {
	AmountMoney  *V1Money       `json:"amount_money"`
	AppliedMoney *V1Money       `json:"applied_money"`
	Name         *string        `json:"name"`
	Rate         *string        `json:"rate"`
	SurchargeID  *string        `json:"surcharge_id"`
	Taxable      *bool          `json:"taxable"`
	Taxes        []V1PaymentTax `json:"taxes"`
	Type         *string        `json:"type"`
}
