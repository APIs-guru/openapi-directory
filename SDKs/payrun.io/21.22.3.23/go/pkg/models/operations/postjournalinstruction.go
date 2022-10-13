package operations

import (
	"openapi/pkg/models/shared"
)

type PostJournalInstructionPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostJournalInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostJournalInstructionRequest struct {
	PathParams PostJournalInstructionPathParams
	Headers    PostJournalInstructionHeaders
}

type PostJournalInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
