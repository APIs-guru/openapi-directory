package shared

type Timesheet struct {
	EmployeeID       string               `json:"EmployeeID"`
	EndDate          string               `json:"EndDate"`
	Hours            *float64             `json:"Hours"`
	StartDate        string               `json:"StartDate"`
	Status           *TimesheetStatusEnum `json:"Status"`
	TimesheetID      *string              `json:"TimesheetID"`
	TimesheetLines   []TimesheetLine      `json:"TimesheetLines"`
	UpdatedDateUtc   *string              `json:"UpdatedDateUTC"`
	ValidationErrors []ValidationError    `json:"ValidationErrors"`
}
