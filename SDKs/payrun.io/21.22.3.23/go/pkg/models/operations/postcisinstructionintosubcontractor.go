package operations

import (
	"openapi/pkg/models/shared"
)

type PostCisInstructionIntoSubContractorPathParams struct {
	EmployerID      string `pathParam:"style=simple,explode=false,name=EmployerId"`
	SubContractorID string `pathParam:"style=simple,explode=false,name=SubContractorId"`
}

type PostCisInstructionIntoSubContractorHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostCisInstructionIntoSubContractorRequest struct {
	PathParams PostCisInstructionIntoSubContractorPathParams
	Headers    PostCisInstructionIntoSubContractorHeaders
	Request    shared.CisInstruction `request:"mediaType=application/json"`
}

type PostCisInstructionIntoSubContractorResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
