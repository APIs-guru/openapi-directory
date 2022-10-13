package operations

import (
	"openapi/pkg/models/shared"
)

type PlaceGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PlaceGetQueryParams struct {
	IncludeChildren *bool `queryParam:"style=form,explode=true,name=includeChildren"`
}

type PlaceGetRequest struct {
	PathParams  PlaceGetPathParams
	QueryParams PlaceGetQueryParams
}

type PlaceGetResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace
}
