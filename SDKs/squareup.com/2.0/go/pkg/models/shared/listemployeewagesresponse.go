package shared

type ListEmployeeWagesResponse struct {
	Cursor        *string        `json:"cursor"`
	EmployeeWages []EmployeeWage `json:"employee_wages"`
	Errors        []Error        `json:"errors"`
}
