package operations

import (
	"openapi/pkg/models/shared"
)

type LineArrivalsPathParams struct {
	Ids         []string `pathParam:"style=simple,explode=false,name=ids"`
	StopPointID string   `pathParam:"style=simple,explode=false,name=stopPointId"`
}

type LineArrivalsDirectionEnum string

const (
	LineArrivalsDirectionEnumInbound  LineArrivalsDirectionEnum = "inbound"
	LineArrivalsDirectionEnumOutbound LineArrivalsDirectionEnum = "outbound"
	LineArrivalsDirectionEnumAll      LineArrivalsDirectionEnum = "all"
)

type LineArrivalsQueryParams struct {
	DestinationStationID *string                    `queryParam:"style=form,explode=true,name=destinationStationId"`
	Direction            *LineArrivalsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
}

type LineArrivalsRequest struct {
	PathParams  LineArrivalsPathParams
	QueryParams LineArrivalsQueryParams
}

type LineArrivalsResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	TflAPIPresentationEntitiesPredictions []shared.TflAPIPresentationEntitiesPrediction
}
