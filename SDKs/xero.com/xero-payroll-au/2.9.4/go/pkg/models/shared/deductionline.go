package shared

type DeductionLine struct {
	Amount          *float64                         `json:"Amount"`
	CalculationType DeductionTypeCalculationTypeEnum `json:"CalculationType"`
	DeductionTypeID string                           `json:"DeductionTypeID"`
	NumberOfUnits   *float64                         `json:"NumberOfUnits"`
	Percentage      *float64                         `json:"Percentage"`
}
