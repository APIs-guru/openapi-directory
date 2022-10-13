package shared

type EmployeeWage struct {
	EmployeeID *string `json:"employee_id"`
	HourlyRate *Money  `json:"hourly_rate"`
	ID         *string `json:"id"`
	Title      *string `json:"title"`
}
