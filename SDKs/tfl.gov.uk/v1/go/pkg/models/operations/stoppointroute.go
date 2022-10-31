package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointRoutePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type StopPointRouteServiceTypesEnum string

const (
	StopPointRouteServiceTypesEnumRegular StopPointRouteServiceTypesEnum = "Regular"
	StopPointRouteServiceTypesEnumNight   StopPointRouteServiceTypesEnum = "Night"
)

type StopPointRouteQueryParams struct {
	ServiceTypes []StopPointRouteServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
}

type StopPointRouteRequest struct {
	PathParams  StopPointRoutePathParams
	QueryParams StopPointRouteQueryParams
}

type StopPointRouteResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	TflAPIPresentationEntitiesStopPointRouteSections []shared.TflAPIPresentationEntitiesStopPointRouteSection
}
