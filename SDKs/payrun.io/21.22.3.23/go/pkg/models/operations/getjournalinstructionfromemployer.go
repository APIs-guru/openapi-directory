package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalInstructionFromEmployerPathParams struct {
	EmployerID           string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type GetJournalInstructionFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetJournalInstructionFromEmployerRequest struct {
	PathParams GetJournalInstructionFromEmployerPathParams
	Headers    GetJournalInstructionFromEmployerHeaders
}

type GetJournalInstructionFromEmployerResponse struct {
	ContentType        string
	ErrorModel         *shared.ErrorModel
	JournalInstruction *shared.JournalInstruction
	StatusCode         int64
}
