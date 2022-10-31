package operations

import (
"openapi/pkg/models/shared")

type UnlikeStoryPathParams struct {
    StoryID string `pathParam:"style=simple,explode=false,name=story_id"`
    
}

type UnlikeStoryQueryParams struct {
    DevicePixelRatio *float64 `queryParam:"style=form,explode=true,name=device_pixel_ratio"`
    
}

type UnlikeStoryRequest struct {
    PathParams UnlikeStoryPathParams 
    QueryParams UnlikeStoryQueryParams 
    
}

type UnlikeStoryResponse struct {
    ContentType string 
    StatusCode int64 
    Story *shared.Story 
    
}

