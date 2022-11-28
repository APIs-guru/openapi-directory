package shared

type LeaveType struct {
	CurrentRecord     *bool    `json:"CurrentRecord,omitempty"`
	IsPaidLeave       *bool    `json:"IsPaidLeave,omitempty"`
	LeaveLoadingRate  *float64 `json:"LeaveLoadingRate,omitempty"`
	LeaveTypeID       *string  `json:"LeaveTypeID,omitempty"`
	Name              *string  `json:"Name,omitempty"`
	NormalEntitlement *float64 `json:"NormalEntitlement,omitempty"`
	ShowOnPayslip     *bool    `json:"ShowOnPayslip,omitempty"`
	TypeOfUnits       *string  `json:"TypeOfUnits,omitempty"`
	UpdatedDateUtc    *string  `json:"UpdatedDateUTC,omitempty"`
}

type LeaveTypeInput struct {
	CurrentRecord     *bool    `json:"CurrentRecord,omitempty"`
	IsPaidLeave       *bool    `json:"IsPaidLeave,omitempty"`
	LeaveLoadingRate  *float64 `json:"LeaveLoadingRate,omitempty"`
	LeaveTypeID       *string  `json:"LeaveTypeID,omitempty"`
	Name              *string  `json:"Name,omitempty"`
	NormalEntitlement *float64 `json:"NormalEntitlement,omitempty"`
	ShowOnPayslip     *bool    `json:"ShowOnPayslip,omitempty"`
	TypeOfUnits       *string  `json:"TypeOfUnits,omitempty"`
}
