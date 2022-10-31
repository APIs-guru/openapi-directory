package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportOutputPathParams struct {
	ReportDefinitionID string `pathParam:"style=simple,explode=false,name=ReportDefinitionId"`
}

type GetReportOutputHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetReportOutputRequest struct {
	PathParams GetReportOutputPathParams
	Headers    GetReportOutputHeaders
}

type GetReportOutputResponse struct {
	ContentType                                   string
	ErrorModel                                    *shared.ErrorModel
	GetReportOutput200ApplicationJSONBinaryString []byte
	StatusCode                                    int64
}
