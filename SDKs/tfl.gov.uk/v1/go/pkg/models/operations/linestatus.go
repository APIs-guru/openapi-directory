package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type LineStatusPathParams struct {
	EndDate   string   `pathParam:"style=simple,explode=false,name=EndDate"`
	StartDate string   `pathParam:"style=simple,explode=false,name=StartDate"`
	Ids       []string `pathParam:"style=simple,explode=false,name=ids"`
}

type LineStatusQueryParams struct {
	DateRangeEndDate   *time.Time `queryParam:"style=form,explode=true,name=dateRange.endDate"`
	DateRangeStartDate *time.Time `queryParam:"style=form,explode=true,name=dateRange.startDate"`
	Detail             *bool      `queryParam:"style=form,explode=true,name=detail"`
	EndDate            string     `queryParam:"style=form,explode=true,name=endDate"`
	StartDate          string     `queryParam:"style=form,explode=true,name=startDate"`
}

type LineStatusRequest struct {
	PathParams  LineStatusPathParams
	QueryParams LineStatusQueryParams
}

type LineStatusResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
