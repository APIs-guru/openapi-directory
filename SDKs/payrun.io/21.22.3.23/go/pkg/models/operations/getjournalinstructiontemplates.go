package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalInstructionTemplatesHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
