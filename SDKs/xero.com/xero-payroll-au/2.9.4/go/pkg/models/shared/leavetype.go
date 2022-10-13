package shared

type LeaveType struct {
	CurrentRecord     *bool    `json:"CurrentRecord"`
	IsPaidLeave       *bool    `json:"IsPaidLeave"`
	LeaveLoadingRate  *float64 `json:"LeaveLoadingRate"`
	LeaveTypeID       *string  `json:"LeaveTypeID"`
	Name              *string  `json:"Name"`
	NormalEntitlement *float64 `json:"NormalEntitlement"`
	ShowOnPayslip     *bool    `json:"ShowOnPayslip"`
	TypeOfUnits       *string  `json:"TypeOfUnits"`
	UpdatedDateUtc    *string  `json:"UpdatedDateUTC"`
}
