package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteJournalInstructionPathParams struct {
	EmployerID           string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalInstructionID string `pathParam:"style=simple,explode=false,name=JournalInstructionId"`
}

type DeleteJournalInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteJournalInstructionRequest struct {
	PathParams DeleteJournalInstructionPathParams
	Headers    DeleteJournalInstructionHeaders
}

type DeleteJournalInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
