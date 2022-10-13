package shared

type LeaveEarningsLine struct {
	EarningsRateID *string  `json:"EarningsRateID"`
	NumberOfUnits  *float64 `json:"NumberOfUnits"`
	RatePerUnit    *float64 `json:"RatePerUnit"`
}
