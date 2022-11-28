package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetByTypePathParams struct {
	Types []string `pathParam:"style=simple,explode=false,name=types"`
}

type StopPointGetByTypeRequest struct {
	PathParams StopPointGetByTypePathParams
}

type StopPointGetByTypeResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint
}
