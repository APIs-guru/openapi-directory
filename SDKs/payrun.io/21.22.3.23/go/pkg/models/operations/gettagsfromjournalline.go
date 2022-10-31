package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromJournalLinePathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalLineID string `pathParam:"style=simple,explode=false,name=JournalLineId"`
}

type GetTagsFromJournalLineHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagsFromJournalLineRequest struct {
	PathParams GetTagsFromJournalLinePathParams
	Headers    GetTagsFromJournalLineHeaders
}

type GetTagsFromJournalLineResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
