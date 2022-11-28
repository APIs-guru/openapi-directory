package operations

import (
	"openapi/pkg/models/shared"
)

type RoadDisruptionPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type RoadDisruptionQueryParams struct {
	Categories   []string `queryParam:"style=form,explode=true,name=categories"`
	Closures     *bool    `queryParam:"style=form,explode=true,name=closures"`
	Severities   []string `queryParam:"style=form,explode=true,name=severities"`
	StripContent *bool    `queryParam:"style=form,explode=true,name=stripContent"`
}

type RoadDisruptionRequest struct {
	PathParams  RoadDisruptionPathParams
	QueryParams RoadDisruptionQueryParams
}

type RoadDisruptionResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	TflAPIPresentationEntitiesRoadDisruptions []shared.TflAPIPresentationEntitiesRoadDisruption
}
