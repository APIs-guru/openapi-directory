package shared

type StateTax struct {
	Amount             *float64 `json:"amount,omitempty"`
	DeductionsAmount   *float64 `json:"deductionsAmount,omitempty"`
	DependentsAmount   *float64 `json:"dependentsAmount,omitempty"`
	Exemptions         *float64 `json:"exemptions,omitempty"`
	Exemptions2        *float64 `json:"exemptions2,omitempty"`
	FilingStatus       *string  `json:"filingStatus,omitempty"`
	HigherRate         *bool    `json:"higherRate,omitempty"`
	OtherIncomeAmount  *float64 `json:"otherIncomeAmount,omitempty"`
	Percentage         *float64 `json:"percentage,omitempty"`
	SpecialCheckCalc   *string  `json:"specialCheckCalc,omitempty"`
	TaxCalculationCode *string  `json:"taxCalculationCode,omitempty"`
	TaxCode            *string  `json:"taxCode,omitempty"`
	W4FormYear         *int64   `json:"w4FormYear,omitempty"`
}
