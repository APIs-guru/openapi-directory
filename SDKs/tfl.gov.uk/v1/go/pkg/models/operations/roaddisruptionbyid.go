package operations

import (
	"openapi/pkg/models/shared"
)

type RoadDisruptionByIDPathParams struct {
	DisruptionIds []string `pathParam:"style=simple,explode=false,name=disruptionIds"`
}

type RoadDisruptionByIDQueryParams struct {
	StripContent *bool `queryParam:"style=form,explode=true,name=stripContent"`
}

type RoadDisruptionByIDRequest struct {
	PathParams  RoadDisruptionByIDPathParams
	QueryParams RoadDisruptionByIDQueryParams
}

type RoadDisruptionByIDResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	TflAPIPresentationEntitiesRoadDisruption *shared.TflAPIPresentationEntitiesRoadDisruption
}
