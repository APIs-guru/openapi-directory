package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployeesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetEmployeesFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEmployeesFromEmployerRequest struct {
	PathParams GetEmployeesFromEmployerPathParams
	Headers    GetEmployeesFromEmployerHeaders
}

type GetEmployeesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
