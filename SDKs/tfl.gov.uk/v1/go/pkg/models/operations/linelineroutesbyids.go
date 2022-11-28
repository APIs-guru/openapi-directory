package operations

import (
	"openapi/pkg/models/shared"
)

type LineLineRoutesByIdsPathParams struct {
	Ids []string `pathParam:"style=simple,explode=false,name=ids"`
}

type LineLineRoutesByIdsServiceTypesEnum string

const (
	LineLineRoutesByIdsServiceTypesEnumRegular LineLineRoutesByIdsServiceTypesEnum = "Regular"
	LineLineRoutesByIdsServiceTypesEnumNight   LineLineRoutesByIdsServiceTypesEnum = "Night"
)

type LineLineRoutesByIdsQueryParams struct {
	ServiceTypes []LineLineRoutesByIdsServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
}

type LineLineRoutesByIdsRequest struct {
	PathParams  LineLineRoutesByIdsPathParams
	QueryParams LineLineRoutesByIdsQueryParams
}

type LineLineRoutesByIdsResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
