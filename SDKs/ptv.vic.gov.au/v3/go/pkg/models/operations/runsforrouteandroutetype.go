package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RunsForRouteAndRouteTypePathParams struct {
	RouteID   int32 `pathParam:"style=simple,explode=false,name=route_id"`
	RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
}

type RunsForRouteAndRouteTypeExpandEnum string

const (
	RunsForRouteAndRouteTypeExpandEnumAll               RunsForRouteAndRouteTypeExpandEnum = "All"
	RunsForRouteAndRouteTypeExpandEnumVehicleDescriptor RunsForRouteAndRouteTypeExpandEnum = "VehicleDescriptor"
	RunsForRouteAndRouteTypeExpandEnumVehiclePosition   RunsForRouteAndRouteTypeExpandEnum = "VehiclePosition"
	RunsForRouteAndRouteTypeExpandEnumNone              RunsForRouteAndRouteTypeExpandEnum = "None"
)

type RunsForRouteAndRouteTypeQueryParams struct {
	DateUtc   *time.Time                           `queryParam:"style=form,explode=true,name=date_utc"`
	Devid     *string                              `queryParam:"style=form,explode=true,name=devid"`
	Expand    []RunsForRouteAndRouteTypeExpandEnum `queryParam:"style=form,explode=true,name=expand"`
	Signature *string                              `queryParam:"style=form,explode=true,name=signature"`
	Token     *string                              `queryParam:"style=form,explode=true,name=token"`
}

type RunsForRouteAndRouteTypeRequest struct {
	PathParams  RunsForRouteAndRouteTypePathParams
	QueryParams RunsForRouteAndRouteTypeQueryParams
}

type RunsForRouteAndRouteTypeResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	V3ErrorResponse *shared.V3ErrorResponse
	V3RunsResponse  *shared.V3RunsResponse
}
