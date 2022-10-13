package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayLinesFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPayLinesFromEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayLinesFromEmployeeRequest struct {
	PathParams GetPayLinesFromEmployeePathParams
	Headers    GetPayLinesFromEmployeeHeaders
}

type GetPayLinesFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
