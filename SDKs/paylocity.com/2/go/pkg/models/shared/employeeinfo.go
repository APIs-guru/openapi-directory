package shared



type EmployeeInfo struct {
    EmployeeID *string `json:"employeeId,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    StatusTypeCode *string `json:"statusTypeCode,omitempty"`
    
}

