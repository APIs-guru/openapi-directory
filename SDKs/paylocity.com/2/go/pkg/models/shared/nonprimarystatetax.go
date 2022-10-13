package shared

type NonPrimaryStateTax struct {
	Amount             *float64 `json:"amount"`
	DeductionsAmount   *float64 `json:"deductionsAmount"`
	DependentsAmount   *float64 `json:"dependentsAmount"`
	Exemptions         *float64 `json:"exemptions"`
	Exemptions2        *float64 `json:"exemptions2"`
	FilingStatus       *string  `json:"filingStatus"`
	HigherRate         *bool    `json:"higherRate"`
	OtherIncomeAmount  *float64 `json:"otherIncomeAmount"`
	Percentage         *float64 `json:"percentage"`
	ReciprocityCode    *string  `json:"reciprocityCode"`
	SpecialCheckCalc   *string  `json:"specialCheckCalc"`
	TaxCalculationCode *string  `json:"taxCalculationCode"`
	TaxCode            *string  `json:"taxCode"`
	W4FormYear         *int64   `json:"w4FormYear"`
}
