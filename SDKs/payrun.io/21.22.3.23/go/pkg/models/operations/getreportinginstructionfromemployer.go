package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportingInstructionFromEmployerPathParams struct {
	EmployerID             string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ReportingInstructionID string `pathParam:"style=simple,explode=false,name=ReportingInstructionId"`
}

type GetReportingInstructionFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetReportingInstructionFromEmployerRequest struct {
	PathParams GetReportingInstructionFromEmployerPathParams
	Headers    GetReportingInstructionFromEmployerHeaders
}

type GetReportingInstructionFromEmployerResponse struct {
	ContentType          string
	ErrorModel           *shared.ErrorModel
	ReportingInstruction *shared.ReportingInstruction
	StatusCode           int64
}
