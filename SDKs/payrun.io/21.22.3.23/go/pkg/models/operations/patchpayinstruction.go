package operations

import (
	"openapi/pkg/models/shared"
)

type PatchPayInstructionPathParams struct {
	EmployeeID       string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayInstructionID string `pathParam:"style=simple,explode=false,name=PayInstructionId"`
}

type PatchPayInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchPayInstructionRequest struct {
	PathParams PatchPayInstructionPathParams
	Headers    PatchPayInstructionHeaders
	Request    shared.PayInstruction `request:"mediaType=application/json"`
}

type PatchPayInstructionResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	PayInstruction *shared.PayInstruction
	StatusCode     int64
}
