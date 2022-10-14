package shared

type GetEmployeeWageResponse struct {
	EmployeeWage *EmployeeWage `json:"employee_wage,omitempty"`
	Errors       []Error       `json:"errors,omitempty"`
}
