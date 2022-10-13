package operations

import (
	"openapi/pkg/models/shared"
)

type PatchCisInstructionPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type PatchCisInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchCisInstructionRequest struct {
	PathParams PatchCisInstructionPathParams
	Headers    PatchCisInstructionHeaders
}

type PatchCisInstructionResponse struct {
	CisInstruction *shared.CisInstruction
	ContentType    string
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
