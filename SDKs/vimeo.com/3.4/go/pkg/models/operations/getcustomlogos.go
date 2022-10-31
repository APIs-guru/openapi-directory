package operations

import (
"openapi/pkg/models/shared")

type GetCustomLogosPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetCustomLogosRequest struct {
    PathParams GetCustomLogosPathParams 
    
}

type GetCustomLogosResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Pictures []shared.Picture 
    
}

