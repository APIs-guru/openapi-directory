package shared

type LeaveAccrualLine struct {
	AutoCalculate *bool    `json:"AutoCalculate"`
	LeaveTypeID   *string  `json:"LeaveTypeID"`
	NumberOfUnits *float64 `json:"NumberOfUnits"`
}
