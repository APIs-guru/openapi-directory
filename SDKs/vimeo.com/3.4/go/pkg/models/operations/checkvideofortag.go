package operations

import (
"openapi/pkg/models/shared")

type CheckVideoForTagPathParams struct {
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    Word string `pathParam:"style=simple,explode=false,name=word"`
    
}

type CheckVideoForTagRequest struct {
    PathParams CheckVideoForTagPathParams 
    
}

type CheckVideoForTagResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Tag *shared.Tag 
    
}

