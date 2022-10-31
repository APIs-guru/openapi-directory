package operations

import (
	"openapi/pkg/models/shared"
)

type LineSearchPathParams struct {
	Query string `pathParam:"style=simple,explode=false,name=query"`
}

type LineSearchServiceTypesEnum string

const (
	LineSearchServiceTypesEnumRegular LineSearchServiceTypesEnum = "Regular"
	LineSearchServiceTypesEnumNight   LineSearchServiceTypesEnum = "Night"
)

type LineSearchQueryParams struct {
	Modes        []string                     `queryParam:"style=form,explode=true,name=modes"`
	ServiceTypes []LineSearchServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
}

type LineSearchRequest struct {
	PathParams  LineSearchPathParams
	QueryParams LineSearchQueryParams
}

type LineSearchResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	TflAPIPresentationEntitiesRouteSearchResponse *shared.TflAPIPresentationEntitiesRouteSearchResponse
}
