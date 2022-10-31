package operations

import (
"time"
"openapi/pkg/models/shared")

type PatternsGetPatternByRunPathParams struct {
    RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
    RunRef string `pathParam:"style=simple,explode=false,name=run_ref"`
    
}


type PatternsGetPatternByRunExpandEnum string

const (
    PatternsGetPatternByRunExpandEnumAll PatternsGetPatternByRunExpandEnum = "All"
PatternsGetPatternByRunExpandEnumStop PatternsGetPatternByRunExpandEnum = "Stop"
PatternsGetPatternByRunExpandEnumRoute PatternsGetPatternByRunExpandEnum = "Route"
PatternsGetPatternByRunExpandEnumRun PatternsGetPatternByRunExpandEnum = "Run"
PatternsGetPatternByRunExpandEnumDirection PatternsGetPatternByRunExpandEnum = "Direction"
PatternsGetPatternByRunExpandEnumDisruption PatternsGetPatternByRunExpandEnum = "Disruption"
PatternsGetPatternByRunExpandEnumVehicleDescriptor PatternsGetPatternByRunExpandEnum = "VehicleDescriptor"
PatternsGetPatternByRunExpandEnumVehiclePosition PatternsGetPatternByRunExpandEnum = "VehiclePosition"
PatternsGetPatternByRunExpandEnumNone PatternsGetPatternByRunExpandEnum = "None"
)


type PatternsGetPatternByRunQueryParams struct {
    DateUtc *time.Time `queryParam:"style=form,explode=true,name=date_utc"`
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    Expand []PatternsGetPatternByRunExpandEnum `queryParam:"style=form,explode=true,name=expand"`
    IncludeGeopath *bool `queryParam:"style=form,explode=true,name=include_geopath"`
    IncludeSkippedStops *bool `queryParam:"style=form,explode=true,name=include_skipped_stops"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    StopID *int32 `queryParam:"style=form,explode=true,name=stop_id"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type PatternsGetPatternByRunRequest struct {
    PathParams PatternsGetPatternByRunPathParams 
    QueryParams PatternsGetPatternByRunQueryParams 
    
}

type PatternsGetPatternByRunResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3StoppingPattern *shared.V3StoppingPattern 
    
}

