package operations

import (
"openapi/pkg/models/shared")

type GetVideoEmbedPresetPathParams struct {
    PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoEmbedPresetRequest struct {
    PathParams GetVideoEmbedPresetPathParams 
    
}

type GetVideoEmbedPresetResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    
}

