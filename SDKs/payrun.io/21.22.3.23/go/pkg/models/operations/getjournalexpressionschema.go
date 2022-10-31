package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalExpressionSchemaHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetJournalExpressionSchemaRequest struct {
	Headers GetJournalExpressionSchemaHeaders
}

type GetJournalExpressionSchemaResponse struct {
	ContentType                string
	ErrorModel                 *shared.ErrorModel
	JournalExpressionDataTable *interface{}
	StatusCode                 int64
}
