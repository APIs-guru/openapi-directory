package shared

type LeaveApplication struct {
	Description        *string           `json:"Description,omitempty"`
	EmployeeID         *string           `json:"EmployeeID,omitempty"`
	EndDate            *string           `json:"EndDate,omitempty"`
	LeaveApplicationID *string           `json:"LeaveApplicationID,omitempty"`
	LeavePeriods       []LeavePeriod     `json:"LeavePeriods,omitempty"`
	LeaveTypeID        *string           `json:"LeaveTypeID,omitempty"`
	StartDate          *string           `json:"StartDate,omitempty"`
	Title              *string           `json:"Title,omitempty"`
	UpdatedDateUtc     *string           `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors   []ValidationError `json:"ValidationErrors,omitempty"`
}
