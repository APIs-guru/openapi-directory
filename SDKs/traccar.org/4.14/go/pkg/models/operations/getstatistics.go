package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetStatisticsQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type GetStatisticsRequest struct {
	QueryParams GetStatisticsQueryParams
}

type GetStatisticsResponse struct {
	ContentType string
	Statistics  []shared.Statistics
	StatusCode  int64
}
