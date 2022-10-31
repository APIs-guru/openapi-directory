package operations

import (
"openapi/pkg/models/shared")

type GetEmbedPresetPathParams struct {
    PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type GetEmbedPresetRequest struct {
    PathParams GetEmbedPresetPathParams 
    
}

type GetEmbedPresetResponse struct {
    ContentType string 
    StatusCode int64 
    Presets *shared.Presets 
    
}

