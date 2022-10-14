package shared

type ListEmployeesResponse struct {
	Cursor    *string    `json:"cursor,omitempty"`
	Employees []Employee `json:"employees,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
