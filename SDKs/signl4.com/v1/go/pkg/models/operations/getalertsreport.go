package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsReportQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetAlertsReportRequest struct {
	QueryParams GetAlertsReportQueryParams
}

type GetAlertsReportResponse struct {
	AlertReport          *shared.AlertReport
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
