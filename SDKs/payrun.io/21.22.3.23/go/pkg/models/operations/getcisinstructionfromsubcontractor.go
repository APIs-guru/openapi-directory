package operations

import (
	"openapi/pkg/models/shared"
)

type GetCisInstructionFromSubContractorPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type GetCisInstructionFromSubContractorHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetCisInstructionFromSubContractorRequest struct {
	PathParams GetCisInstructionFromSubContractorPathParams
	Headers    GetCisInstructionFromSubContractorHeaders
}

type GetCisInstructionFromSubContractorResponse struct {
	CisInstruction *shared.CisInstruction
	ContentType    string
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
