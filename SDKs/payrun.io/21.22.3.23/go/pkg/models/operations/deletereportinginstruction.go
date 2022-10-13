package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportingInstructionPathParams struct {
	EmployerID             string `pathParam:"style=simple,explode=false,name=EmployerId"`
	ReportingInstructionID string `pathParam:"style=simple,explode=false,name=ReportingInstructionId"`
}

type DeleteReportingInstructionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteReportingInstructionRequest struct {
	PathParams DeleteReportingInstructionPathParams
	Headers    DeleteReportingInstructionHeaders
}

type DeleteReportingInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
