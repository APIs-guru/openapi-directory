package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportingInstructionsFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetReportingInstructionsFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetReportingInstructionsFromEmployerRequest struct {
	PathParams GetReportingInstructionsFromEmployerPathParams
	Headers    GetReportingInstructionsFromEmployerHeaders
}

type GetReportingInstructionsFromEmployerResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
