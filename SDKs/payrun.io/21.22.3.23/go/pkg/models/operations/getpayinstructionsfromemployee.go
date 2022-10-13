package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayInstructionsFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetPayInstructionsFromEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayInstructionsFromEmployeeRequest struct {
	PathParams GetPayInstructionsFromEmployeePathParams
	Headers    GetPayInstructionsFromEmployeeHeaders
}

type GetPayInstructionsFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
