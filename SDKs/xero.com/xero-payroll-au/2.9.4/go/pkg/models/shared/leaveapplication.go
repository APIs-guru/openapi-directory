package shared

type LeaveApplication struct {
	Description        *string           `json:"Description"`
	EmployeeID         *string           `json:"EmployeeID"`
	EndDate            *string           `json:"EndDate"`
	LeaveApplicationID *string           `json:"LeaveApplicationID"`
	LeavePeriods       []LeavePeriod     `json:"LeavePeriods"`
	LeaveTypeID        *string           `json:"LeaveTypeID"`
	StartDate          *string           `json:"StartDate"`
	Title              *string           `json:"Title"`
	UpdatedDateUtc     *string           `json:"UpdatedDateUTC"`
	ValidationErrors   []ValidationError `json:"ValidationErrors"`
}
