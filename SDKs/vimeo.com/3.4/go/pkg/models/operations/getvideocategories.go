package operations

import (
"openapi/pkg/models/shared")

type GetVideoCategoriesPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoCategoriesRequest struct {
    PathParams GetVideoCategoriesPathParams 
    
}

type GetVideoCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    Categories []shared.Category 
    LegacyError *shared.LegacyError 
    
}

