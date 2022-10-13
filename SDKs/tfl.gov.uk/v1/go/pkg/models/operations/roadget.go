package operations

import (
	"openapi/pkg/models/shared"
)

type RoadGetResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	TflAPIPresentationEntitiesRoadCorridors []shared.TflAPIPresentationEntitiesRoadCorridor
}
