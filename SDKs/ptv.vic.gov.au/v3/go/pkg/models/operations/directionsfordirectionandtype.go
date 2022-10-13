package operations

import (
	"openapi/pkg/models/shared"
)

type DirectionsForDirectionAndTypePathParams struct {
	DirectionID int32 `pathParam:"style=simple,explode=false,name=direction_id"`
	RouteType   int32 `pathParam:"style=simple,explode=false,name=route_type"`
}

type DirectionsForDirectionAndTypeQueryParams struct {
	Devid     *string `queryParam:"style=form,explode=true,name=devid"`
	Signature *string `queryParam:"style=form,explode=true,name=signature"`
	Token     *string `queryParam:"style=form,explode=true,name=token"`
}

type DirectionsForDirectionAndTypeRequest struct {
	PathParams  DirectionsForDirectionAndTypePathParams
	QueryParams DirectionsForDirectionAndTypeQueryParams
}

type DirectionsForDirectionAndTypeResponse struct {
	Body                 []byte
	ContentType          string
	StatusCode           int64
	V3DirectionsResponse *shared.V3DirectionsResponse
	V3ErrorResponse      *shared.V3ErrorResponse
}
