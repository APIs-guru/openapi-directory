package operations

import (
	"openapi/pkg/models/shared"
)

type PostJournalInstructionTemplateHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostJournalInstructionTemplateRequest struct {
	Headers PostJournalInstructionTemplateHeaders
}

type PostJournalInstructionTemplateResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
