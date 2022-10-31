package operations

import (
	"openapi/pkg/models/shared"
)

type PutJournalInstructionTemplatePathParams struct {
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type PutJournalInstructionTemplateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutJournalInstructionTemplateRequest struct {
	PathParams PutJournalInstructionTemplatePathParams
	Headers    PutJournalInstructionTemplateHeaders
}

type PutJournalInstructionTemplateResponse struct {
	ContentType        string
	ErrorModel         *shared.ErrorModel
	JournalInstruction *shared.JournalInstruction
	StatusCode         int64
}
