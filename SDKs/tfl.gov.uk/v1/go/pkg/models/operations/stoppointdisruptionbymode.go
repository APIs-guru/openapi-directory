package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointDisruptionByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type StopPointDisruptionByModeQueryParams struct {
	IncludeRouteBlockedStops *bool `queryParam:"style=form,explode=true,name=includeRouteBlockedStops"`
}

type StopPointDisruptionByModeRequest struct {
	PathParams  StopPointDisruptionByModePathParams
	QueryParams StopPointDisruptionByModeQueryParams
}

type StopPointDisruptionByModeResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	TflAPIPresentationEntitiesDisruptedPoints []shared.TflAPIPresentationEntitiesDisruptedPoint
}
