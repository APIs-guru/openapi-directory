package operations

import (
	"openapi/pkg/models/shared"
)

type OccupancyGetBikePointsOccupanciesPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type OccupancyGetBikePointsOccupanciesRequest struct {
	PathParams OccupancyGetBikePointsOccupanciesPathParams
}

type OccupancyGetBikePointsOccupanciesResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	TflAPIPresentationEntitiesBikePointOccupancies []shared.TflAPIPresentationEntitiesBikePointOccupancy
}
