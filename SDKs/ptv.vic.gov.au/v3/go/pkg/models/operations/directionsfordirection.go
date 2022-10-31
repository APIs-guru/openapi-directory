package operations

import (
"openapi/pkg/models/shared")

type DirectionsForDirectionPathParams struct {
    DirectionID int32 `pathParam:"style=simple,explode=false,name=direction_id"`
    
}

type DirectionsForDirectionQueryParams struct {
    Devid *string `queryParam:"style=form,explode=true,name=devid"`
    Signature *string `queryParam:"style=form,explode=true,name=signature"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type DirectionsForDirectionRequest struct {
    PathParams DirectionsForDirectionPathParams 
    QueryParams DirectionsForDirectionQueryParams 
    
}

type DirectionsForDirectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    V3DirectionsResponse *shared.V3DirectionsResponse 
    V3ErrorResponse *shared.V3ErrorResponse 
    
}

