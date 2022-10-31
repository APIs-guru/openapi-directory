package shared



type TimesheetLine struct {
    EarningsRateID *string `json:"EarningsRateID,omitempty"`
    NumberOfUnits []float64 `json:"NumberOfUnits,omitempty"`
    TrackingItemID *string `json:"TrackingItemID,omitempty"`
    UpdatedDateUtc *string `json:"UpdatedDateUTC,omitempty"`
    
}

