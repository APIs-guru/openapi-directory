package shared

type EmployeeInfo struct {
	EmployeeID     *string `json:"employeeId"`
	StatusCode     *string `json:"statusCode"`
	StatusTypeCode *string `json:"statusTypeCode"`
}
