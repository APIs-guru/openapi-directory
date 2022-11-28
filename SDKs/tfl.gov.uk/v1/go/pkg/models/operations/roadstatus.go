package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RoadStatusPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type RoadStatusQueryParams struct {
	DateRangeNullableEndDate   *time.Time `queryParam:"style=form,explode=true,name=dateRangeNullable.endDate"`
	DateRangeNullableStartDate *time.Time `queryParam:"style=form,explode=true,name=dateRangeNullable.startDate"`
}

type RoadStatusRequest struct {
	PathParams  RoadStatusPathParams
	QueryParams RoadStatusQueryParams
}

type RoadStatusResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	TflAPIPresentationEntitiesRoadCorridors []shared.TflAPIPresentationEntitiesRoadCorridor
}
