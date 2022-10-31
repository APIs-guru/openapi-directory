package operations

import (
"openapi/pkg/models/shared")

type RouteRequestBody struct {
    JSON *shared.SeldonMessage `form:"name=json,json"`
    
}

type RouteRequest struct {
    Request RouteRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type RouteResponse struct {
    ContentType string 
    SeldonMessage *shared.SeldonMessage 
    StatusCode int64 
    
}

