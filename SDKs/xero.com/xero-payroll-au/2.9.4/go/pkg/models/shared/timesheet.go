package shared

type Timesheet struct {
	EmployeeID       string               `json:"EmployeeID"`
	EndDate          string               `json:"EndDate"`
	Hours            *float64             `json:"Hours,omitempty"`
	StartDate        string               `json:"StartDate"`
	Status           *TimesheetStatusEnum `json:"Status,omitempty"`
	TimesheetID      *string              `json:"TimesheetID,omitempty"`
	TimesheetLines   []TimesheetLine      `json:"TimesheetLines,omitempty"`
	UpdatedDateUtc   *string              `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors []ValidationError    `json:"ValidationErrors,omitempty"`
}
