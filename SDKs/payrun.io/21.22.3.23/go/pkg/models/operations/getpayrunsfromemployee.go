package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunsFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPayRunsFromEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayRunsFromEmployeeRequest struct {
	PathParams GetPayRunsFromEmployeePathParams
	Headers    GetPayRunsFromEmployeeHeaders
}

type GetPayRunsFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
