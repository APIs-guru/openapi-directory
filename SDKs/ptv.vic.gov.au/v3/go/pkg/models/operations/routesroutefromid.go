package operations

import (
"time"
"openapi/pkg/models/shared")

type RoutesRouteFromIDPathParams struct {
    RouteID int32 `pathParam:"style=simple,explode=false,name=route_id"`
    
}

type RoutesRouteFromIDQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    GeopathUtc *time.Time `queryParam:"style=form,explode=true,name=geopath_utc"`
    IncludeGeopath *bool `queryParam:"style=form,explode=true,name=include_geopath"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type RoutesRouteFromIDRequest struct {
    PathParams RoutesRouteFromIDPathParams 
    QueryParams RoutesRouteFromIDQueryParams 
    
}

type RoutesRouteFromIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3RouteResponse *shared.V3RouteResponse 
    
}

