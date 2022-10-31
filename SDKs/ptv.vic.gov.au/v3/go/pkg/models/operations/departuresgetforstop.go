package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DeparturesGetForStopPathParams struct {
	RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
	StopID    int32 `pathParam:"style=simple,explode=false,name=stop_id"`
}

type DeparturesGetForStopExpandEnum string

const (
	DeparturesGetForStopExpandEnumAll               DeparturesGetForStopExpandEnum = "All"
	DeparturesGetForStopExpandEnumStop              DeparturesGetForStopExpandEnum = "Stop"
	DeparturesGetForStopExpandEnumRoute             DeparturesGetForStopExpandEnum = "Route"
	DeparturesGetForStopExpandEnumRun               DeparturesGetForStopExpandEnum = "Run"
	DeparturesGetForStopExpandEnumDirection         DeparturesGetForStopExpandEnum = "Direction"
	DeparturesGetForStopExpandEnumDisruption        DeparturesGetForStopExpandEnum = "Disruption"
	DeparturesGetForStopExpandEnumVehicleDescriptor DeparturesGetForStopExpandEnum = "VehicleDescriptor"
	DeparturesGetForStopExpandEnumVehiclePosition   DeparturesGetForStopExpandEnum = "VehiclePosition"
	DeparturesGetForStopExpandEnumNone              DeparturesGetForStopExpandEnum = "None"
)

type DeparturesGetForStopQueryParams struct {
	DateUtc          *time.Time                       `queryParam:"style=form,explode=true,name=date_utc"`
	Devid            *string                          `queryParam:"style=form,explode=true,name=devid"`
	DirectionID      *int32                           `queryParam:"style=form,explode=true,name=direction_id"`
	Expand           []DeparturesGetForStopExpandEnum `queryParam:"style=form,explode=true,name=expand"`
	Gtfs             *bool                            `queryParam:"style=form,explode=true,name=gtfs"`
	IncludeCancelled *bool                            `queryParam:"style=form,explode=true,name=include_cancelled"`
	IncludeGeopath   *bool                            `queryParam:"style=form,explode=true,name=include_geopath"`
	LookBackwards    *bool                            `queryParam:"style=form,explode=true,name=look_backwards"`
	MaxResults       *int32                           `queryParam:"style=form,explode=true,name=max_results"`
	PlatformNumbers  []int32                          `queryParam:"style=form,explode=true,name=platform_numbers"`
	Signature        *string                          `queryParam:"style=form,explode=true,name=signature"`
	Token            *string                          `queryParam:"style=form,explode=true,name=token"`
}

type DeparturesGetForStopRequest struct {
	PathParams  DeparturesGetForStopPathParams
	QueryParams DeparturesGetForStopQueryParams
}

type DeparturesGetForStopResponse struct {
	Body                 []byte
	ContentType          string
	StatusCode           int64
	V3DeparturesResponse *shared.V3DeparturesResponse
	V3ErrorResponse      *shared.V3ErrorResponse
}
