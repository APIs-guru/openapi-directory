package operations

import (
	"openapi/pkg/models/shared"
)

type PutJournalLineTagPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalLineID string `pathParam:"style=simple,explode=false,name=JournalLineId"`
	TagID         string `pathParam:"style=simple,explode=false,name=TagId"`
}

type PutJournalLineTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutJournalLineTagRequest struct {
	PathParams PutJournalLineTagPathParams
	Headers    PutJournalLineTagHeaders
}

type PutJournalLineTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
