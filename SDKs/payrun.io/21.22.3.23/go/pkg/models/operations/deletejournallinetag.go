package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteJournalLineTagPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalLineID string `pathParam:"style=simple,explode=false,name=JournalLineId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteJournalLineTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteJournalLineTagRequest struct {
	PathParams DeleteJournalLineTagPathParams
	Headers    DeleteJournalLineTagHeaders
}

type DeleteJournalLineTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
