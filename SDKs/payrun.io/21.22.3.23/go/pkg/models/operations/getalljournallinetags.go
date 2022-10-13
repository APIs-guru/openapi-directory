package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllJournalLineTagsPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAllJournalLineTagsHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAllJournalLineTagsRequest struct {
	PathParams GetAllJournalLineTagsPathParams
	Headers    GetAllJournalLineTagsHeaders
}

type GetAllJournalLineTagsResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
