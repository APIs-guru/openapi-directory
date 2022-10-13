package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportLinesFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetReportLinesFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetReportLinesFromEmployerRequest struct {
	PathParams GetReportLinesFromEmployerPathParams
	Headers    GetReportLinesFromEmployerHeaders
}

type GetReportLinesFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
