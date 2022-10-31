package shared



type ListEmployeeWagesResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    EmployeeWages []EmployeeWage `json:"employee_wages,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

