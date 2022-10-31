package operations

import (
"time"
"openapi/pkg/models/shared")

type DeparturesGetForStopAndRoutePathParams struct {
    RouteID string `pathParam:"style=simple,explode=false,name=route_id"`
    RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
    StopID int32 `pathParam:"style=simple,explode=false,name=stop_id"`
    
}


type DeparturesGetForStopAndRouteExpandEnum string

const (
    DeparturesGetForStopAndRouteExpandEnumAll DeparturesGetForStopAndRouteExpandEnum = "All"
DeparturesGetForStopAndRouteExpandEnumStop DeparturesGetForStopAndRouteExpandEnum = "Stop"
DeparturesGetForStopAndRouteExpandEnumRoute DeparturesGetForStopAndRouteExpandEnum = "Route"
DeparturesGetForStopAndRouteExpandEnumRun DeparturesGetForStopAndRouteExpandEnum = "Run"
DeparturesGetForStopAndRouteExpandEnumDirection DeparturesGetForStopAndRouteExpandEnum = "Direction"
DeparturesGetForStopAndRouteExpandEnumDisruption DeparturesGetForStopAndRouteExpandEnum = "Disruption"
DeparturesGetForStopAndRouteExpandEnumVehicleDescriptor DeparturesGetForStopAndRouteExpandEnum = "VehicleDescriptor"
DeparturesGetForStopAndRouteExpandEnumVehiclePosition DeparturesGetForStopAndRouteExpandEnum = "VehiclePosition"
DeparturesGetForStopAndRouteExpandEnumNone DeparturesGetForStopAndRouteExpandEnum = "None"
)


type DeparturesGetForStopAndRouteQueryParams struct {
    DateUtc *time.Time `queryParam:"style=form,explode=true,name=date_utc"`
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DirectionID *int32 `queryParam:"style=form,explode=true,name=direction_id"`
    Expand []DeparturesGetForStopAndRouteExpandEnum `queryParam:"style=form,explode=true,name=expand"`
    Gtfs *bool `queryParam:"style=form,explode=true,name=gtfs"`
    IncludeCancelled *bool `queryParam:"style=form,explode=true,name=include_cancelled"`
    IncludeGeopath *bool `queryParam:"style=form,explode=true,name=include_geopath"`
    LookBackwards *bool `queryParam:"style=form,explode=true,name=look_backwards"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=max_results"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DeparturesGetForStopAndRouteRequest struct {
    PathParams DeparturesGetForStopAndRoutePathParams 
    QueryParams DeparturesGetForStopAndRouteQueryParams 
    
}

type DeparturesGetForStopAndRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DeparturesResponse *shared.V3DeparturesResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

