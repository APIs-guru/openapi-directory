package operations

import (
	"openapi/pkg/models/shared"
)

type PlaceGetByTypePathParams struct {
	Types []string `pathParam:"style=simple,explode=false,name=types"`
}

type PlaceGetByTypeQueryParams struct {
	ActiveOnly *bool `queryParam:"style=form,explode=true,name=activeOnly"`
}

type PlaceGetByTypeRequest struct {
	PathParams  PlaceGetByTypePathParams
	QueryParams PlaceGetByTypeQueryParams
}

type PlaceGetByTypeResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace
}
