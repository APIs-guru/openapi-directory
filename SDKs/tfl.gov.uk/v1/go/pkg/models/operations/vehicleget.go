package operations

import (
	"openapi/pkg/models/shared"
)

type VehicleGetPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type VehicleGetRequest struct {
	PathParams VehicleGetPathParams
}

type VehicleGetResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	TflAPIPresentationEntitiesPredictions []shared.TflAPIPresentationEntitiesPrediction
}
