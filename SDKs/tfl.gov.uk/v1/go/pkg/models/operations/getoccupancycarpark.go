package operations

import (
	"openapi/pkg/models/shared"
)

type GetOccupancyCarParkResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	TflAPIPresentationEntitiesCarParkOccupancies []shared.TflAPIPresentationEntitiesCarParkOccupancy
}
