package operations

import (
"openapi/pkg/models/shared")

type RoutesOneOrMoreRoutesQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    RouteName *string `queryParam:"style=form,explode=true,name=route_name"`
    RouteTypes []int32 `queryParam:"style=form,explode=true,name=route_types"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type RoutesOneOrMoreRoutesRequest struct {
    QueryParams RoutesOneOrMoreRoutesQueryParams 
    
}

type RoutesOneOrMoreRoutesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3RouteResponse *shared.V3RouteResponse 
    
}

