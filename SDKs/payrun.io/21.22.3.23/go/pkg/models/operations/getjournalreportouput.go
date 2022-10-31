package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalReportOuputQueryParams struct {
	EmployerKey  string  `queryParam:"style=form,explode=true,name=EmployerKey"`
	LedgerTarget string  `queryParam:"style=form,explode=true,name=LedgerTarget"`
	PayFrequency string  `queryParam:"style=form,explode=true,name=PayFrequency"`
	TaxPeriod    *string `queryParam:"style=form,explode=true,name=TaxPeriod"`
	TaxYear      string  `queryParam:"style=form,explode=true,name=TaxYear"`
}

type GetJournalReportOuputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetJournalReportOuputRequest struct {
	QueryParams GetJournalReportOuputQueryParams
	Headers     GetJournalReportOuputHeaders
}

type GetJournalReportOuputResponse struct {
	ContentType                                         string
	ErrorModel                                          *shared.ErrorModel
	GetJournalReportOuput200ApplicationJSONBinaryString []byte
	StatusCode                                          int64
}
