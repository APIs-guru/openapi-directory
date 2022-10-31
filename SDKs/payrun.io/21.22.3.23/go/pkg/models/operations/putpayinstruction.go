package operations

import (
	"openapi/pkg/models/shared"
)

type PutPayInstructionPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
}

type PutPayInstructionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutPayInstructionRequest struct {
	PathParams PutPayInstructionPathParams
	Headers    PutPayInstructionHeaders
	Request    shared.PayInstruction `request:"mediaType=application/json"`
}

type PutPayInstructionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	PayInstruction *shared.PayInstruction
	StatusCode     int64
}
