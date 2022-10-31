package shared



type DeductionLine struct {
    Amount *float64 `json:"Amount,omitempty"`
    CalculationType DeductionTypeCalculationTypeEnum `json:"CalculationType"`
    DeductionTypeID string `json:"DeductionTypeID"`
    NumberOfUnits *float64 `json:"NumberOfUnits,omitempty"`
    Percentage *float64 `json:"Percentage,omitempty"`
    
}

