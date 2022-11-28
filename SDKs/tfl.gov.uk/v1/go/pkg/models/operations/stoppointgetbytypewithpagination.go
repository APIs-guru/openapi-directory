package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetByTypeWithPaginationPathParams struct {
	Page  int32    `pathParam:"style=simple,explode=false,name=page"`
	Types []string `pathParam:"style=simple,explode=false,name=types"`
}

type StopPointGetByTypeWithPaginationRequest struct {
	PathParams StopPointGetByTypeWithPaginationPathParams
}

type StopPointGetByTypeWithPaginationResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint
}
