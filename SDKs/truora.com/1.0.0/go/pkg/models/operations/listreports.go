package operations

import (
	"openapi/pkg/models/shared"
)

type ListReportsQueryParams struct {
	StartKey *string `queryParam:"style=form,explode=true,name=start_key"`
	Username *string `queryParam:"style=form,explode=true,name=username"`
}

type ListReportsRequest struct {
	QueryParams ListReportsQueryParams
}

type ListReportsResponse struct {
	ContentType   string
	ReportsOutput *shared.ReportsOutput
	StatusCode    int64
}
