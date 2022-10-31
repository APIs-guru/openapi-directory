package operations

import (
"openapi/pkg/models/shared")

type GetTagPathParams struct {
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}

type GetTagRequest struct {
    PathParams GetTagPathParams 
    
}

type GetTagResponse struct {
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}

