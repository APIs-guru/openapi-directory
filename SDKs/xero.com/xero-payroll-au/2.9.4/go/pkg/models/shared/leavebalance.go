package shared

type LeaveBalance struct {
	LeaveName     *string  `json:"LeaveName"`
	LeaveTypeID   *string  `json:"LeaveTypeID"`
	NumberOfUnits *float64 `json:"NumberOfUnits"`
	TypeOfUnits   *string  `json:"TypeOfUnits"`
}
