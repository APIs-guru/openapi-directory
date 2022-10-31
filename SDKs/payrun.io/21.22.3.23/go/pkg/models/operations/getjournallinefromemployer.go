package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalLineFromEmployerPathParams struct {
	EmployerID    string `pathParam:"style=simple,explode=false,name=EmployerId"`
	JournalLineID string `pathParam:"style=simple,explode=false,name=JournalLineId"`
}

type GetJournalLineFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetJournalLineFromEmployerRequest struct {
	PathParams GetJournalLineFromEmployerPathParams
	Headers    GetJournalLineFromEmployerHeaders
}

type GetJournalLineFromEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	JournalLine *shared.JournalLine
	StatusCode  int64
}
