package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayInstructionFromEmployeePathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
}

type GetPayInstructionFromEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayInstructionFromEmployeeRequest struct {
	PathParams GetPayInstructionFromEmployeePathParams
	Headers    GetPayInstructionFromEmployeeHeaders
}

type GetPayInstructionFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	PayInstruction *shared.PayInstruction
	StatusCode     int64
}
