package shared

type TimesheetLine struct {
	EarningsRateID *string   `json:"EarningsRateID"`
	NumberOfUnits  []float64 `json:"NumberOfUnits"`
	TrackingItemID *string   `json:"TrackingItemID"`
	UpdatedDateUtc *string   `json:"UpdatedDateUTC"`
}
