package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEmployerSummaryReportOuputQueryParams struct {
	ContextDate time.Time `queryParam:"style=form,explode=true,name=ContextDate"`
	EmployerKey string    `queryParam:"style=form,explode=true,name=EmployerKey"`
}

type GetEmployerSummaryReportOuputHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployerSummaryReportOuputRequest struct {
	QueryParams GetEmployerSummaryReportOuputQueryParams
	Headers     GetEmployerSummaryReportOuputHeaders
}

type GetEmployerSummaryReportOuputResponse struct {
	ContentType                                                 string
	ErrorModel                                                  *shared.ErrorModel
	GetEmployerSummaryReportOuput200ApplicationJSONBinaryString []byte
	StatusCode                                                  int64
}
