package shared

type ListEmployeesResponse struct {
	Cursor    *string    `json:"cursor"`
	Employees []Employee `json:"employees"`
	Errors    []Error    `json:"errors"`
}
