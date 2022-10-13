package shared

type EarningsLine struct {
	Amount               *float64                         `json:"Amount"`
	AnnualSalary         *float64                         `json:"AnnualSalary"`
	CalculationType      *EarningsRateCalculationTypeEnum `json:"CalculationType"`
	EarningsRateID       string                           `json:"EarningsRateID"`
	FixedAmount          *float64                         `json:"FixedAmount"`
	NormalNumberOfUnits  *float64                         `json:"NormalNumberOfUnits"`
	NumberOfUnits        *float64                         `json:"NumberOfUnits"`
	NumberOfUnitsPerWeek *float64                         `json:"NumberOfUnitsPerWeek"`
	RatePerUnit          *float64                         `json:"RatePerUnit"`
}
