package operations

import (
	"openapi/pkg/models/shared"
)

type PatchEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PatchEmployeeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
