package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalInstructionTemplatePathParams struct {
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type GetJournalInstructionTemplateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetJournalInstructionTemplateRequest struct {
	PathParams GetJournalInstructionTemplatePathParams
	Headers    GetJournalInstructionTemplateHeaders
}

type GetJournalInstructionTemplateResponse struct {
	ContentType        string
	ErrorModel         *shared.ErrorModel
	JournalInstruction *shared.JournalInstruction
	StatusCode         int64
}
