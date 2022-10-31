package operations

import (
"time"
"openapi/pkg/models/shared")

type RunsForRoutePathParams struct {
    RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
    
}


type RunsForRouteExpandEnum string

const (
    RunsForRouteExpandEnumAll RunsForRouteExpandEnum = "All"
RunsForRouteExpandEnumVehicleDescriptor RunsForRouteExpandEnum = "VehicleDescriptor"
RunsForRouteExpandEnumVehiclePosition RunsForRouteExpandEnum = "VehiclePosition"
RunsForRouteExpandEnumNone RunsForRouteExpandEnum = "None"
)


type RunsForRouteQueryParams struct {
    DateUtc *time.Time `queryParam:"style=form,explode=true,name=date_utc"`
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    Expand []RunsForRouteExpandEnum `queryParam:"style=form,explode=true,name=expand"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type RunsForRouteRequest struct {
    PathParams RunsForRoutePathParams 
    QueryParams RunsForRouteQueryParams 
    
}

type RunsForRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3RunsResponse *shared.V3RunsResponse 
    
}

