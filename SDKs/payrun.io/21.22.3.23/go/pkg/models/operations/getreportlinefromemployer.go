package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportLineFromEmployerPathParams struct {
	EmployerID   string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ReportLineID string `pathParam:"style=simple,explode=false,name=ReportLineId"`
}

type GetReportLineFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetReportLineFromEmployerRequest struct {
	PathParams GetReportLineFromEmployerPathParams
	Headers    GetReportLineFromEmployerHeaders
}

type GetReportLineFromEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	ReportLine  *shared.ReportLine
	StatusCode  int64
}
