package operations

import (
	"openapi/pkg/models/shared"
)

type GetNetPayReportOutputQueryParams struct {
	EmployerKey    string  `queryParam:"style=form,explode=true,name=EmployerKey"`
	MaxIndex       *string `queryParam:"style=form,explode=true,name=MaxIndex"`
	PayScheduleKey string  `queryParam:"style=form,explode=true,name=PayScheduleKey"`
	StartIndex     *string `queryParam:"style=form,explode=true,name=StartIndex"`
	TaxPeriod      *string `queryParam:"style=form,explode=true,name=TaxPeriod"`
	TaxYear        string  `queryParam:"style=form,explode=true,name=TaxYear"`
}

type GetNetPayReportOutputHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetNetPayReportOutputRequest struct {
	QueryParams GetNetPayReportOutputQueryParams
	Headers     GetNetPayReportOutputHeaders
}

type GetNetPayReportOutputResponse struct {
	ContentType                                         string
	ErrorModel                                          *shared.ErrorModel
	GetNetPayReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                          int64
}
