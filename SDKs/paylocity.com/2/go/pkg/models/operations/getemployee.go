package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeePathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type GetEmployeeSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetEmployeeRequest struct {
	PathParams GetEmployeePathParams
	Security   GetEmployeeSecurity
}

type GetEmployeeResponse struct {
	ContentType string
	StatusCode  int64
	Employees   []shared.Employee
	Errors      []shared.Error
}
