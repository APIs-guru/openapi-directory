package operations

import (
	"openapi/pkg/models/shared"
)

type BikePointGetAllResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace
}
