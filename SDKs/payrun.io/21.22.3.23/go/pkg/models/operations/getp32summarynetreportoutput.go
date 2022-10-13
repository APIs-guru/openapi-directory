package operations

import (
	"openapi/pkg/models/shared"
)

type GetP32SummaryNetReportOutputQueryParams struct {
	EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
	TaxYear     string `queryParam:"style=form,explode=true,name=TaxYear"`
}

type GetP32SummaryNetReportOutputHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetP32SummaryNetReportOutputRequest struct {
	QueryParams GetP32SummaryNetReportOutputQueryParams
	Headers     GetP32SummaryNetReportOutputHeaders
}

type GetP32SummaryNetReportOutputResponse struct {
	ContentType                                                string
	ErrorModel                                                 *shared.ErrorModel
	GetP32SummaryNetReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                                 int64
}
