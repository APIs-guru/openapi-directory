package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointGetPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type StopPointGetQueryParams struct {
	IncludeCrowdingData *bool `queryParam:"style=form,explode=true,name=includeCrowdingData"`
}

type StopPointGetRequest struct {
	PathParams  StopPointGetPathParams
	QueryParams StopPointGetQueryParams
}

type StopPointGetResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	TflAPIPresentationEntitiesStopPoints []shared.TflAPIPresentationEntitiesStopPoint
}
