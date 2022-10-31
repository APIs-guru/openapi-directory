package operations

import (
"openapi/pkg/models/shared")

type RouteTypesGetRouteTypesQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type RouteTypesGetRouteTypesRequest struct {
    QueryParams RouteTypesGetRouteTypesQueryParams 
    
}

type RouteTypesGetRouteTypesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3ErrorResponse *shared.V3ErrorResponse 
    V3RouteTypesResponse *shared.V3RouteTypesResponse 
    
}

