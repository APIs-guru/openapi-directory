package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalInstructionTemplatesHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetJournalInstructionTemplatesRequest struct {
	Headers GetJournalInstructionTemplatesHeaders
}

type GetJournalInstructionTemplatesResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
