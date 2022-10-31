package operations

import (
"openapi/pkg/models/shared")

type GetEmbedPresetAlt1PathParams struct {
    PresetID float64 `pathParam:"style=simple,explode=false,name=preset_id"`
    
}

type GetEmbedPresetAlt1Request struct {
    PathParams GetEmbedPresetAlt1PathParams 
    
}

type GetEmbedPresetAlt1Response struct {
    ContentType string 
    StatusCode int64 
    Presets *shared.Presets 
    
}

