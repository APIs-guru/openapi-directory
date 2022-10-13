package operations

import (
	"openapi/pkg/models/shared"
)

type DirectionsForRoutePathParams struct {
	RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
}

type DirectionsForRouteQueryParams struct {
	Devid     *string `queryParam:"style=form,explode=true,name=devid"`
	Signature *string `queryParam:"style=form,explode=true,name=signature"`
	Token     *string `queryParam:"style=form,explode=true,name=token"`
}

type DirectionsForRouteRequest struct {
	PathParams  DirectionsForRoutePathParams
	QueryParams DirectionsForRouteQueryParams
}

type DirectionsForRouteResponse struct {
	Body                 []byte
	ContentType          string
	StatusCode           int64
	V3DirectionsResponse *shared.V3DirectionsResponse
	V3ErrorResponse      *shared.V3ErrorResponse
}
