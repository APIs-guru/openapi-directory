package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAPIDailyreportsDailyreportsQueryParams struct {
	DateFrom *time.Time            `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo   *time.Time            `queryParam:"style=form,explode=true,name=dateTo"`
	House    *shared.HouseEnumEnum `queryParam:"style=form,explode=true,name=house"`
	Skip     *int32                `queryParam:"style=form,explode=true,name=skip"`
	Take     *int32                `queryParam:"style=form,explode=true,name=take"`
}

type GetAPIDailyreportsDailyreportsRequest struct {
	QueryParams GetAPIDailyreportsDailyreportsQueryParams
}

type GetAPIDailyreportsDailyreportsResponse struct {
	Body                             []byte
	ContentType                      string
	DailyReportViewModelSearchResult *shared.DailyReportViewModelSearchResult
	ProblemDetails                   map[string]map[string]interface{}
	StatusCode                       int64
}
