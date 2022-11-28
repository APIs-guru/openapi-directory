package operations

import (
	"openapi/pkg/models/shared"
)

type LineRouteByModePathParams struct {
	Modes []string `pathParam:"style=simple,explode=false,name=modes"`
}

type LineRouteByModeServiceTypesEnum string

const (
	LineRouteByModeServiceTypesEnumRegular LineRouteByModeServiceTypesEnum = "Regular"
	LineRouteByModeServiceTypesEnumNight   LineRouteByModeServiceTypesEnum = "Night"
)

type LineRouteByModeQueryParams struct {
	ServiceTypes []LineRouteByModeServiceTypesEnum `queryParam:"style=form,explode=true,name=serviceTypes"`
}

type LineRouteByModeRequest struct {
	PathParams  LineRouteByModePathParams
	QueryParams LineRouteByModeQueryParams
}

type LineRouteByModeResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	TflAPIPresentationEntitiesLines []shared.TflAPIPresentationEntitiesLine
}
