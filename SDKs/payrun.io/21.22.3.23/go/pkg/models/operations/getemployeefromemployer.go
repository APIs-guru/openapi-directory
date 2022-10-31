package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeeFromEmployerPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeeFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployeeFromEmployerRequest struct {
	PathParams GetEmployeeFromEmployerPathParams
	Headers    GetEmployeeFromEmployerHeaders
}

type GetEmployeeFromEmployerResponse struct {
	ContentType string
	Employee    *shared.Employee
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
