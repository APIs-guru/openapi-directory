package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportDefinitionPathParams struct {
	ReportDefinitionID string `pathParam:"style=simple,explode=false,name=ReportDefinitionId"`
}

type DeleteReportDefinitionHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteReportDefinitionRequest struct {
	PathParams DeleteReportDefinitionPathParams
	Headers    DeleteReportDefinitionHeaders
}

type DeleteReportDefinitionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
