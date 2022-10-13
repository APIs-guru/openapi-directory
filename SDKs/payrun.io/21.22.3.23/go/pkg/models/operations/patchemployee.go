package operations

import (
	"openapi/pkg/models/shared"
)

type PatchEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PatchEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchEmployeeRequest struct {
	PathParams PatchEmployeePathParams
	Headers    PatchEmployeeHeaders
	Request    shared.Employee `request:"mediaType=application/json"`
}

type PatchEmployeeResponse struct {
	ContentType string
	Employee    *shared.Employee
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
