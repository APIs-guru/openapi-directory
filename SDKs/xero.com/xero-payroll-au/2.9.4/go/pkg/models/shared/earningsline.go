package shared



type EarningsLine struct {
    Amount *float64 `json:"Amount,omitempty"`
    AnnualSalary *float64 `json:"AnnualSalary,omitempty"`
    CalculationType *EarningsRateCalculationTypeEnum `json:"CalculationType,omitempty"`
    EarningsRateID string `json:"EarningsRateID"`
    FixedAmount *float64 `json:"FixedAmount,omitempty"`
    NormalNumberOfUnits *float64 `json:"NormalNumberOfUnits,omitempty"`
    NumberOfUnits *float64 `json:"NumberOfUnits,omitempty"`
    NumberOfUnitsPerWeek *float64 `json:"NumberOfUnitsPerWeek,omitempty"`
    RatePerUnit *float64 `json:"RatePerUnit,omitempty"`
    
}

