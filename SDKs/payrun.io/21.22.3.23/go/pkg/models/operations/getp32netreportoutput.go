package operations

import (
	"openapi/pkg/models/shared"
)

type GetP32NetReportOutputQueryParams struct {
	EmployerKey string `queryParam:"style=form,explode=true,name=EmployerKey"`
	TaxYear     string `queryParam:"style=form,explode=true,name=TaxYear"`
}

type GetP32NetReportOutputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetP32NetReportOutputRequest struct {
	QueryParams GetP32NetReportOutputQueryParams
	Headers     GetP32NetReportOutputHeaders
}

type GetP32NetReportOutputResponse struct {
	ContentType                                         string
	ErrorModel                                          *shared.ErrorModel
	GetP32NetReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                          int64
}
