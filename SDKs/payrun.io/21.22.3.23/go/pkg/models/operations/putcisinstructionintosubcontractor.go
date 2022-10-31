package operations

import (
	"openapi/pkg/models/shared"
)

type PutCisInstructionIntoSubContractorPathParams struct {
	CisInstructionID string `pathParam:"style=simple,explode=false,name=CisInstructionId"`
	EmployerID       string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID  string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type PutCisInstructionIntoSubContractorHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutCisInstructionIntoSubContractorRequest struct {
	PathParams PutCisInstructionIntoSubContractorPathParams
	Headers    PutCisInstructionIntoSubContractorHeaders
	Request    shared.CisInstruction `request:"mediaType=application/json"`
}

type PutCisInstructionIntoSubContractorResponse struct {
	CisInstruction *shared.CisInstruction
	ContentType    string
	ErrorModel     *shared.ErrorModel
	StatusCode     int64
}
