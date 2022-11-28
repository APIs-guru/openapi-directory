package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoadIdsPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type GetRoadIdsRequest struct {
	PathParams GetRoadIdsPathParams
}

type GetRoadIdsResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	TflAPIPresentationEntitiesRoadCorridors []shared.TflAPIPresentationEntitiesRoadCorridor
}
