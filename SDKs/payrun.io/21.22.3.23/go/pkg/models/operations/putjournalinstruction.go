package operations

import (
	"openapi/pkg/models/shared"
)

type PutJournalInstructionPathParams struct {
	EmployerID           string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type PutJournalInstructionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutJournalInstructionRequest struct {
	PathParams PutJournalInstructionPathParams
	Headers    PutJournalInstructionHeaders
}

type PutJournalInstructionResponse struct {
	ContentType        string
	ErrorModel         *shared.ErrorModel
	JournalInstruction *shared.JournalInstruction
	StatusCode         int64
}
