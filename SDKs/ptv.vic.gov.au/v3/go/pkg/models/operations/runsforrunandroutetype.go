package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RunsForRunAndRouteTypePathParams struct {
	RouteType int32  `pathParam:"style=simple,explode=false,name=route_type"`
	RunRef    string `pathParam:"style=simple,explode=false,name=run_ref"`
}

type RunsForRunAndRouteTypeExpandEnum string

const (
	RunsForRunAndRouteTypeExpandEnumAll               RunsForRunAndRouteTypeExpandEnum = "All"
	RunsForRunAndRouteTypeExpandEnumVehicleDescriptor RunsForRunAndRouteTypeExpandEnum = "VehicleDescriptor"
	RunsForRunAndRouteTypeExpandEnumVehiclePosition   RunsForRunAndRouteTypeExpandEnum = "VehiclePosition"
	RunsForRunAndRouteTypeExpandEnumNone              RunsForRunAndRouteTypeExpandEnum = "None"
)

type RunsForRunAndRouteTypeQueryParams struct {
	DateUtc        *time.Time                         `queryParam:"style=form,explode=true,name=date_utc"`
	Devid          *string                            `queryParam:"style=form,explode=true,name=devid"`
	Expand         []RunsForRunAndRouteTypeExpandEnum `queryParam:"style=form,explode=true,name=expand"`
	IncludeGeopath *bool                              `queryParam:"style=form,explode=true,name=include_geopath"`
	Signature      *string                            `queryParam:"style=form,explode=true,name=signature"`
	Token          *string                            `queryParam:"style=form,explode=true,name=token"`
}

type RunsForRunAndRouteTypeRequest struct {
	PathParams  RunsForRunAndRouteTypePathParams
	QueryParams RunsForRunAndRouteTypeQueryParams
}

type RunsForRunAndRouteTypeResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	V3ErrorResponse *shared.V3ErrorResponse
	V3RunResponse   *shared.V3RunResponse
}
