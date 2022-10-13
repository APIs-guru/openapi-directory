package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointArrivalsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StopPointArrivalsRequest struct {
	PathParams StopPointArrivalsPathParams
}

type StopPointArrivalsResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	TflAPIPresentationEntitiesPredictions []shared.TflAPIPresentationEntitiesPrediction
}
