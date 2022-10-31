package operations

import (
"time"
"openapi/pkg/models/shared")

type StopsStopsForRoutePathParams struct {
    RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
    RouteType int32 `pathParam:"style=simple,explode=false,name=route_type"`
    
}

type StopsStopsForRouteQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    DirectionID *int32 `queryParam:"style=form,explode=true,name=direction_id"`
    GeopathUtc *time.Time `queryParam:"style=form,explode=true,name=geopath_utc"`
    IncludeGeopath *bool `queryParam:"style=form,explode=true,name=include_geopath"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    StopDisruptions *bool `queryParam:"style=form,explode=true,name=stop_disruptions"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type StopsStopsForRouteRequest struct {
    PathParams StopsStopsForRoutePathParams 
    QueryParams StopsStopsForRouteQueryParams 
    
}

type StopsStopsForRouteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3StopsOnRouteResponse *shared.V3StopsOnRouteResponse 
    
}

