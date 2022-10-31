package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalLinesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetJournalLinesFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetJournalLinesFromEmployerRequest struct {
	PathParams GetJournalLinesFromEmployerPathParams
	Headers    GetJournalLinesFromEmployerHeaders
}

type GetJournalLinesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
