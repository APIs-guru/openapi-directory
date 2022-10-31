package shared

type EmployeeWage struct {
	EmployeeID *string `json:"employee_id,omitempty"`
	HourlyRate *Money  `json:"hourly_rate,omitempty"`
	ID         *string `json:"id,omitempty"`
	Title      *string `json:"title,omitempty"`
}
