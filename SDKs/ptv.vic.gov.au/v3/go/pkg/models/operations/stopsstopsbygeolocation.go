package operations

import (
"openapi/pkg/models/shared")

type StopsStopsByGeolocationPathParams struct {
    Latitude float32 `pathParam:"style=simple,explode=false,name=latitude"`
    Longitude float32 `pathParam:"style=simple,explode=false,name=longitude"`
    
}

type StopsStopsByGeolocationQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    MaxDistance *float64 `queryParam:"style=form,explode=true,name=max_distance"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=max_results"`
    RouteTypes []int32 `queryParam:"style=form,explode=true,name=route_types"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    StopDisruptions *bool `queryParam:"style=form,explode=true,name=stop_disruptions"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type StopsStopsByGeolocationRequest struct {
    PathParams StopsStopsByGeolocationPathParams 
    QueryParams StopsStopsByGeolocationQueryParams 
    
}

type StopsStopsByGeolocationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3StopsByDistanceResponse *shared.V3StopsByDistanceResponse 
    
}

