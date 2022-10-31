package operations

import (
	"openapi/pkg/models/shared"
)

type PostReportingInstructionPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostReportingInstructionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostReportingInstructionRequest struct {
	PathParams PostReportingInstructionPathParams
	Headers    PostReportingInstructionHeaders
	Request    shared.ReportingInstruction `request:"mediaType=application/json"`
}

type PostReportingInstructionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
