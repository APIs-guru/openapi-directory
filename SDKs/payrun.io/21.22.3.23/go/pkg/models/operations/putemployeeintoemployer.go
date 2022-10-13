package operations

import (
	"openapi/pkg/models/shared"
)

type PutEmployeeIntoEmployerPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PutEmployeeIntoEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutEmployeeIntoEmployerRequest struct {
	PathParams PutEmployeeIntoEmployerPathParams
	Headers    PutEmployeeIntoEmployerHeaders
	Request    shared.Employee `request:"mediaType=application/json"`
}

type PutEmployeeIntoEmployerResponse struct {
	ContentType string
	Employee    *shared.Employee
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
