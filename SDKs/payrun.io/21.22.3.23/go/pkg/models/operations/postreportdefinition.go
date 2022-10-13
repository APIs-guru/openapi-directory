package operations

import (
	"openapi/pkg/models/shared"
)

type PostReportDefinitionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostReportDefinitionRequest struct {
	Headers PostReportDefinitionHeaders
	Request shared.ReportDefinition `request:"mediaType=application/json"`
}

type PostReportDefinitionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
