package shared

// EmployeeInfo
// The employee info model
type EmployeeInfo struct {
	EmployeeID     *string `json:"employeeId,omitempty"`
	StatusCode     *string `json:"statusCode,omitempty"`
	StatusTypeCode *string `json:"statusTypeCode,omitempty"`
}
