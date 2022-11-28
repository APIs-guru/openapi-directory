package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointDisruptionPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type StopPointDisruptionQueryParams struct {
	FlattenResponse          *bool `queryParam:"style=form,explode=true,name=flattenResponse"`
	GetFamily                *bool `queryParam:"style=form,explode=true,name=getFamily"`
	IncludeRouteBlockedStops *bool `queryParam:"style=form,explode=true,name=includeRouteBlockedStops"`
}

type StopPointDisruptionRequest struct {
	PathParams  StopPointDisruptionPathParams
	QueryParams StopPointDisruptionQueryParams
}

type StopPointDisruptionResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	TflAPIPresentationEntitiesDisruptedPoints []shared.TflAPIPresentationEntitiesDisruptedPoint
}
