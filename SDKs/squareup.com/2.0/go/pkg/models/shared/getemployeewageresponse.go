package shared

type GetEmployeeWageResponse struct {
	EmployeeWage *EmployeeWage `json:"employee_wage"`
	Errors       []Error       `json:"errors"`
}
