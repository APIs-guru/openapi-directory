package operations

import (
	"openapi/pkg/models/shared"
)

type LineTimetableToPathParams struct {
	FromStopPointID string `pathParam:"style=simple,explode=false,name=fromStopPointId"`
	ID              string `pathParam:"style=simple,explode=false,name=id"`
	ToStopPointID   string `pathParam:"style=simple,explode=false,name=toStopPointId"`
}

type LineTimetableToRequest struct {
	PathParams LineTimetableToPathParams
}

type LineTimetableToResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	TflAPIPresentationEntitiesTimetableResponse *shared.TflAPIPresentationEntitiesTimetableResponse
}
