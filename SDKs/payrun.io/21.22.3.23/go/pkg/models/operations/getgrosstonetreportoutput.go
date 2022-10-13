package operations

import (
	"openapi/pkg/models/shared"
)

type GetGrossToNetReportOutputQueryParams struct {
	EmployerKey    string  `queryParam:"style=form,explode=true,name=EmployerKey"`
	MaxIndex       *string `queryParam:"style=form,explode=true,name=MaxIndex"`
	PayScheduleKey string  `queryParam:"style=form,explode=true,name=PayScheduleKey"`
	StartIndex     *string `queryParam:"style=form,explode=true,name=StartIndex"`
	TaxPeriod      *string `queryParam:"style=form,explode=true,name=TaxPeriod"`
	TaxYear        string  `queryParam:"style=form,explode=true,name=TaxYear"`
}

type GetGrossToNetReportOutputHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetGrossToNetReportOutputRequest struct {
	QueryParams GetGrossToNetReportOutputQueryParams
	Headers     GetGrossToNetReportOutputHeaders
}

type GetGrossToNetReportOutputResponse struct {
	ContentType                                             string
	ErrorModel                                              *shared.ErrorModel
	GetGrossToNetReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                              int64
}
