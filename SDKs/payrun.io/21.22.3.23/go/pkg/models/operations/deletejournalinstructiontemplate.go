package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteJournalInstructionTemplatePathParams struct {
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type DeleteJournalInstructionTemplateHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteJournalInstructionTemplateRequest struct {
	PathParams DeleteJournalInstructionTemplatePathParams
	Headers    DeleteJournalInstructionTemplateHeaders
}

type DeleteJournalInstructionTemplateResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
