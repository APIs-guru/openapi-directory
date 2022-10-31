package shared

type LeaveEarningsLine struct {
	EarningsRateID *string  `json:"EarningsRateID,omitempty"`
	NumberOfUnits  *float64 `json:"NumberOfUnits,omitempty"`
	RatePerUnit    *float64 `json:"RatePerUnit,omitempty"`
}
