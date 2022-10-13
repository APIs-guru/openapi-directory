package operations

import (
	"openapi/pkg/models/shared"
)

type PlaceSearchQueryParams struct {
	Name  string   `queryParam:"style=form,explode=true,name=name"`
	Types []string `queryParam:"style=form,explode=true,name=types"`
}

type PlaceSearchRequest struct {
	QueryParams PlaceSearchQueryParams
}

type PlaceSearchResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace
}
