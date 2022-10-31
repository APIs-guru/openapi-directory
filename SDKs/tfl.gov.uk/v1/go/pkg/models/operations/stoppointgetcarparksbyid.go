package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetCarParksByIDPathParams struct {
	StopPointID string `pathParam:"style=simple,explode=false,name=stopPointId"`
}

type StopPointGetCarParksByIDRequest struct {
	PathParams StopPointGetCarParksByIDPathParams
}

type StopPointGetCarParksByIDResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace
}
